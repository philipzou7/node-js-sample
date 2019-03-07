var express = require('express');
var app = express();
var defaultConfig = require('./config.json');

const port = process.env.PORT;
console.log(`The port env variable is ${port}.`);
const serverURL = process.env.CC_SERVER_URL;

console.log(`The server url env variable is ${serverURL}.`);
const activeServerURL = serverURL || defaultConfig.default_server_url;
console.log(`Active server url is ${activeServerURL}.`);

app.set('port', (process.env.PORT || defaultConfig.default_port || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!, server URL is ' + activeServerURL)
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
