var URL = 'http://zengraph.ru/weather-display/'
var page = require('webpage').create();
page.viewportSize = { width: 600, height: 800 };
page.clipRect = { top: 0, left: 0, width: 600, height: 800 };

page.onLoadFinished = function(status) {
    page.render('snapshot.png');
    phantom.exit();
}

page.open(URL);
