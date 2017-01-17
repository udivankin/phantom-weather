const config = require('./config.json');
const Canvas =require('canvas');
const fs = require('fs');
const moment = require('moment');
const DarkSky = require('dark-sky');
const out = fs.createWriteStream(__dirname + '/snapshot.png');
const Image = Canvas.Image;
const canvas = new Canvas(600, 800);
const ctx = canvas.getContext('2d');
const stream = canvas.pngStream();
const forecast = new DarkSky(config.appId);
const units = '℃' // : '&#8457;'
const defaultTextBaseline = 'alphabetic';

const arrow = bearing => 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20transform%3D%22rotate(' + bearing + '%2C%2016%2C%2016)%22%20d%3D%22M18%2028V8.8l4.62%204.62c.4.4.86.58%201.38.58.98%200%202-.8%202-2%200-.53-.2-1-.58-1.38l-7.96-7.96C17.13%202.33%2016.73%202%2016%202s-1.08.28-1.45.65l-7.97%207.97c-.4.4-.58.85-.58%201.38%200%201.2%201.02%202%202%202%20.52%200%201-.2%201.38-.58L14%208.8V28c0%201.1.9%202%202%202s2-.9%202-2z%22%2F%3E%3C%2Fsvg%3E';

const iconMap = {
  'clear-day': 'clear.png',
  'clear-night': 'clear-night.png',
  rain: 'rain.png',
  snow: 'snow.png',
  sleet: 'sleet.png',
  wind: 'wind.png',
  fog: 'fog.png',
  cloudy: 'cloudy.png',
  'partly-cloudy-day': 'partly-cloudy.png',
  'partly-cloudy-night': 'partly-cloudy-night.png',
  hail: 'sleet.png',
  thunderstorm: 'thunder.png',
  tornado: 'tornado.png',
};

function drawIcon(icon, left, top, size) {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(
      img,
      left,
      top,
      size || config.iconSizes.small,
      size || config.iconSizes.small
    );
  }
  img.src = icon;
}

function drawText(text, left, top, fontSize, textBaseline) {
  ctx.font = fontSize + "px sans-serif";
  ctx.textBaseline = textBaseline || defaultTextBaseline;
  ctx.fillText(text, left, top);
  return ctx.measureText(text);
}

function drawTemp(temp, left, top) {
  const tempSize = drawText(temp, left, top, 80, 'top');
  drawText(units, left + tempSize.width, top + 5, 40, 'top');
}

function drawWind(wind, left, top) {
  drawIcon(arrow(wind.bearing), left, top, 60);
  drawText(Math.round(wind.speed) + ' m/s', left + 80, top + 40, 30);
}

function drawTempBlock(weather, left, top) {
  drawText(weather.date, left + 20, top, 20);
  drawIcon(weather.icon, left + 5, top);
  drawText('High:', left + 20, top + config.iconSizes.small + 20, 20);
  drawTemp(weather.high, left + 20, top + config.iconSizes.small + 20);
  drawText('Low:', left + 20, top + config.iconSizes.small + 140, 20);
  drawTemp(weather.low, left + 20, top + config.iconSizes.small + 140);
}

function drawForecast(data, offset) {
  drawTempBlock(
    {
      high: Math.round(data.temperatureMax),
      low: Math.round(data.temperatureMin),
      icon: __dirname + '/icons/' + iconMap[data.icon],
      date: moment.unix(data.time).format('dddd, Do'),
    },
    offset,
    390
  );
}

function drawCurrent(data) {
  drawText(moment.unix(data.time).format('dddd, Do'), 40, 60, 32);
  drawIcon(__dirname + '/icons/' + iconMap[data.icon], 0, 40, config.iconSizes.large);
  drawText('High:', 400, 50, 20);
  drawTemp(Math.round(data.temperatureMax), 400, 50);
  drawText('Low:', 400, 160, 20);
  drawTemp(Math.round(data.temperatureMin), 400, 160);
  drawText('Wind:', 400, 270, 20);
  drawWind({ bearing: data.windBearing, speed: data.windSpeed }, 400, 270);
}

function renderWeather(response) {
  drawCurrent(response.daily.data[0]);
  drawForecast(response.daily.data[1], 20);
  drawForecast(response.daily.data[2], 210);
  drawForecast(response.daily.data[3], 400);

  stream.on('data', function(chunk){
   out.write(chunk);
  });

  stream.on('end', function(){
   console.log('saved png');
  });
}

forecast
  .latitude(config.lat)
  .longitude(config.lon)
  .units(config.units)
  .exclude(config.exclude)
  .get()
  .then(response => {
    fs.writeFile(__dirname + '/weather.json', JSON.stringify(response), 'utf8');
    renderWeather(response);
  })
  .catch(err => {
    console.log(err)
  });
