var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Attending request...');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>Hello World!</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>');
});

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Server running at http://${host}:${port}/`);
});
