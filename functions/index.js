const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-max-age=1200')
  nuxt.renderRoute(req.url)
  .then(result => {
    res.send(result.html)
  })
  .catch(error => {
    res.send(error)
  })
}

function test(req, res) {
  res.send('Functioning like a charm.')
}

app.get('*', handleRequest)

exports.app = functions.https.onRequest(test)
