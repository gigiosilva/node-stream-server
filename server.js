const NodeMediaServer = require('node-media-server');
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'))
// })
 
const config = {
  rtmp: {
    port: 3000,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};
 
var nms = new NodeMediaServer(config)
nms.run();

// app.listen(3000, function () {
//   console.log('Listening on port 3000!')
// })