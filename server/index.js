const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const https = require('https')
const fs = require('fs')
const app = express()
const helmet = require('helmet')
const compression = require('compression');
const mongoose =require('mongoose');



const keyPath = './server/config/private.key';
const certPath = './server/config/certificate.pem';
const caPath = './server/config/ca_bundle.pem'
const hskey = fs.readFileSync(keyPath);
const hscert = fs.readFileSync(certPath);
const ca = fs.readFileSync(caPath).toString();




app.use(helmet({
  frameguard: false
}));
app.use(compression());
//routes
const post = require('./api/post')
//Routes which should handle requests
app.use('/api/post',post)

//DB
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')


async function start() {
  // Init socket io
  //socket io
var options = {
  key: hskey,
  cert: hscert,
  ca:ca
};
const socketServer = https.createServer(options, app);
socketServer.listen(3001,function(){
  console.log('wss start on 3001')
});
let allowedOrigins = "*:*"
const io = require('socket.io')(socketServer,{origins:allowedOrigins});

io.on('connection', async (socket) => {
  
    socket.on("message", (obj) => {
      io.emit("message", obj);
    });
    socket.on("disconnect", () => {
      console.log("a user go out");
    });
  });

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 443
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  const server = https.createServer({
    key: hskey,
    cert:hscert
  },app)
  server.listen(port, host)
  consola.ready({
    message: `Server listening on https://${host}:${port}`,
    badge: true
  })
}
start()

