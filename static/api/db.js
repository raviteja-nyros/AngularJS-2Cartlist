const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

var db = {};
var files = fs.readdirSync("./static/api/");
files.forEach(function (file) {
  if (path.extname("./static/api/" + file) === '.json') {
    db[path.basename("./static/api/" + file, '.json')] = require("./" + file);
  }
});

// module.exports = db;
// Returns an Express server
var server = jsonServer.create();
// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());
// Returns an Express router
var router = jsonServer.router(db);
server.use(router);
server.listen(3006);
