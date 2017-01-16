  var exclude = 'minutely,hourly,alerts,flags';

  var lat = '34.683663';
  var lon = '33.040546';
  var units = 'si';
  var url = 'https://api.darksky.net/forecast/' + appId + '/' + lat + ',' + lon;
  var today = new Date();
  var monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var response = '{"latitude":34.683663,"longitude":33.040546,"timezone":"Asia/Nicosia","offset":2,"currently":{"time":1484504448,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":12.99,"apparentTemperature":12.99,"dewPoint":7.06,"humidity":0.67,"windSpeed":0.78,"windBearing":134,"visibility":9.99,"cloudCover":0.3,"pressure":1020.11,"ozone":302.73},"daily":{"summary":"No precipitation throughout the week, with temperatures rising to 19°C on Wednesday.","icon":"clear-day","data":[{"time":1484431200,"summary":"Partly cloudy starting in the afternoon.","icon":"partly-cloudy-night","sunriseTime":1484456148,"sunsetTime":1484492452,"moonPhase":0.61,"precipIntensity":0.0102,"precipIntensityMax":0.0305,"precipIntensityMaxTime":1484434800,"precipProbability":0.02,"precipType":"rain","temperatureMin":8.74,"temperatureMinTime":1484445600,"temperatureMax":15.89,"temperatureMaxTime":1484478000,"apparentTemperatureMin":6.79,"apparentTemperatureMinTime":1484445600,"apparentTemperatureMax":15.89,"apparentTemperatureMaxTime":1484478000,"dewPoint":6.41,"humidity":0.67,"windSpeed":1.43,"windBearing":43,"visibility":9.99,"cloudCover":0.38,"pressure":1017.42,"ozone":312.2},{"time":1484517600,"summary":"Partly cloudy throughout the day.","icon":"partly-cloudy-night","sunriseTime":1484542532,"sunsetTime":1484578910,"moonPhase":0.64,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":9.05,"temperatureMinTime":1484532000,"temperatureMax":16.13,"temperatureMaxTime":1484568000,"apparentTemperatureMin":8.11,"apparentTemperatureMinTime":1484532000,"apparentTemperatureMax":16.13,"apparentTemperatureMaxTime":1484568000,"dewPoint":6.75,"humidity":0.71,"windSpeed":2.69,"windBearing":86,"cloudCover":0.43,"pressure":1020.44,"ozone":306.08},{"time":1484604000,"summary":"Mostly cloudy starting in the afternoon.","icon":"partly-cloudy-night","sunriseTime":1484628915,"sunsetTime":1484665368,"moonPhase":0.67,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":9.28,"temperatureMinTime":1484618400,"temperatureMax":17.81,"temperatureMaxTime":1484654400,"apparentTemperatureMin":6.83,"apparentTemperatureMinTime":1484618400,"apparentTemperatureMax":17.81,"apparentTemperatureMaxTime":1484654400,"dewPoint":7.49,"humidity":0.72,"windSpeed":4.91,"windBearing":61,"cloudCover":0.43,"pressure":1018.99,"ozone":293.35},{"time":1484690400,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1484715296,"sunsetTime":1484751826,"moonPhase":0.7,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":11.59,"temperatureMinTime":1484690400,"temperatureMax":19.27,"temperatureMaxTime":1484744400,"apparentTemperatureMin":11.59,"apparentTemperatureMinTime":1484690400,"apparentTemperatureMax":19.27,"apparentTemperatureMaxTime":1484744400,"dewPoint":8.23,"humidity":0.63,"windSpeed":1.91,"windBearing":29,"cloudCover":0.08,"pressure":1019.94,"ozone":309.86},{"time":1484776800,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1484801675,"sunsetTime":1484838285,"moonPhase":0.73,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":12.94,"temperatureMinTime":1484791200,"temperatureMax":18.27,"temperatureMaxTime":1484838000,"apparentTemperatureMin":12.94,"apparentTemperatureMinTime":1484791200,"apparentTemperatureMax":18.27,"apparentTemperatureMaxTime":1484838000,"dewPoint":7.14,"humidity":0.6,"windSpeed":0.75,"windBearing":351,"cloudCover":0.01,"pressure":1023.23,"ozone":295.65},{"time":1484863200,"summary":"Partly cloudy starting in the afternoon, continuing until evening.","icon":"partly-cloudy-night","sunriseTime":1484888052,"sunsetTime":1484924745,"moonPhase":0.76,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":12.96,"temperatureMinTime":1484877600,"temperatureMax":17.72,"temperatureMaxTime":1484920800,"apparentTemperatureMin":12.96,"apparentTemperatureMinTime":1484877600,"apparentTemperatureMax":17.72,"apparentTemperatureMaxTime":1484920800,"dewPoint":6.56,"humidity":0.58,"windSpeed":0.39,"windBearing":336,"cloudCover":0.15,"pressure":1023.03,"ozone":304.99},{"time":1484949600,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1484974427,"sunsetTime":1485011205,"moonPhase":0.79,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":12.87,"temperatureMinTime":1484960400,"temperatureMax":16.54,"temperatureMaxTime":1485003600,"apparentTemperatureMin":12.87,"apparentTemperatureMinTime":1484960400,"apparentTemperatureMax":16.54,"apparentTemperatureMaxTime":1485003600,"dewPoint":5.64,"humidity":0.57,"windSpeed":1.92,"windBearing":71,"cloudCover":0.01,"pressure":1022.42,"ozone":312.92},{"time":1485036000,"summary":"Clear throughout the day.","icon":"clear-day","sunriseTime":1485060801,"sunsetTime":1485097665,"moonPhase":0.82,"precipIntensity":0.0127,"precipIntensityMax":0.033,"precipIntensityMaxTime":1485118800,"precipProbability":0.02,"precipType":"rain","temperatureMin":11.87,"temperatureMinTime":1485057600,"temperatureMax":16.19,"temperatureMaxTime":1485090000,"apparentTemperatureMin":11.87,"apparentTemperatureMinTime":1485057600,"apparentTemperatureMax":16.19,"apparentTemperatureMaxTime":1485090000,"dewPoint":5.27,"humidity":0.57,"windSpeed":3.96,"windBearing":63,"cloudCover":0,"pressure":1024.1,"ozone":303.91}]}}';

  function renderWeather(data) {
    console.log('renderWeather', data);
    // var city = data.city.name;
    // var date = dayNames[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()];
    // var nextWeather = data.list[0];
    // var dayWeather = [data.list[6], data.list[12], data.list[18]];
    //
    // $('#title .city').text(city);
    // $('#title .date').text(date);
    // $('.unit').html(units === 'metric' ? '&#8451;' : '&#8457;');
    // $('#today .high .degrees').text(nextWeather.main.temp_max);
    // $('#today .low .degrees').text(nextWeather.main.temp_min);
    //
    // for (var day = 1; day <= 3; day++) {
    //   $('#day' + day + ' .high .degrees').text(dayWeather[day-1].main.temp_max);
    //   $('#day' + day + ' .low .degrees').text(dayWeather[day-1].main.temp_min);
    // };
  }

  $.get(url, { exclude: exclude, units: units })
    .done(function(result) {
      console.log("done", result);
      renderWeather(result);
    })
    .fail(function(e) {
      console.log( "error", JSON.stringify(e) );
    })
    .always(function(e) {
      console.log( "finished", e );
    });
});
