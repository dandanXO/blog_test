const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const https = require('https')
const fs = require('fs')
const app = express()

const keyPath = './server/config/private.key';
const certPath = './server/config/certificate.pem';
const hskey = fs.readFileSync(keyPath);
const hscert = fs.readFileSync(certPath);

//routes
const post = require('./api/post')
//Routes which should handle requests
app.use('/api/post',post)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
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
