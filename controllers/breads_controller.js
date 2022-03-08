const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
   const pickBread = Bread[Number(req.params.arrayIndex)]
   res.send(pickBread)
  
  })

module.exports = breads