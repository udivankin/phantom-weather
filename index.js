$(function() {
  const cityId = '&id=146384';
  const appId = '&appid=3079f5cceea57f29bab829b9fa3fc3cd';
  const units = 'metric';
  const URL = 'http://api.openweathermap.org/data/2.5/forecast?units=' + units + cityId + appId;
  const today = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const renderWeather = (data) => {
    const city = data.city.name;
    const date = dayNames[today.getDay()] + ', ' + today.getDate() + ' ' + monthNames[today.getMonth()];
    const nextWeather = data.list[0];
    const dayWeather = [data.list[6], data.list[12], data.list[18]];

    $('#title .city').text(city);
    $('#title .date').text(date);
    $('.unit').html(units === 'metric' ? '&#8451;' : '&#8457;');
    $('#today .high .degrees').text(nextWeather.main.temp_max);
    $('#today .low .degrees').text(nextWeather.main.temp_min);

    for (let day = 1; day <= 3; day++) {
      $('#day' + day + ' .high .degrees').text(dayWeather[day-1].main.temp_max);
      $('#day' + day + ' .low .degrees').text(dayWeather[day-1].main.temp_min);
    };
  }

  $.get(URL, function(response) {
    renderWeather(response);
  });
});
