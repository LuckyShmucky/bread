const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
//   res.send(Bread)
    res.render('Index', 
    {
        breads: Bread,
         title: 'Index Page'
}
    )
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// show, if the user searches for a bread
//that doesn't exist, they will be sent 
//to a 404 page
// SHOW
breads.get('/:arrayIndex', (req, res) => {
 
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.render('404')
  }
})

  // CREATE
breads.post('/', (req, res) => {
 const hasImage = req.body.image;
 if(!hasImage){
     req.body.Image = 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
 }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })  

  // DELETE   breas/:id
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})
module.exports = breads