$(function() {
  const cityId = "146384";
  const appId = "3079f5cceea57f29bab829b9fa3fc3cd";
  const URL = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + appId;
  
  $.get(URL, function(response) {
      console.log(response);
  });
});
