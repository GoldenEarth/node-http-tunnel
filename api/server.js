#!/usr/bin/env node
var http = require('http');
var net = require('net');
var b64 = require('./lib/base64stream');
var tunnel = require('./lib/request_tunnel');

// var tunnel_port;

// if (process.argv[2] == 'development') {
//   tunnel_port = 3001;
// } else {
//   tunnel_port = 80;
// }

var s = tunnel.createServer(function () {
  //console.log('Someone connected!');
});

// s.listen(tunnel_port);
module.exports = s

