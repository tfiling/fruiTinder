var app = require('./api/app');
var port = process.env.PORT || 8888;//TODO env

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});