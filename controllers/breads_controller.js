const express = require('express')
const { render } = require('express/lib/response')
const breads = express.Router()
const Bread = require('../models/bread.js')




// INDEX
breads.get('/', (req, res) => {
  
  //we are connecting this route to the data that mongoose retrieves from 
  //mongo ('..models/bread.js')
  Bread.find()
      .then(foundBreads => {
          res.render('index',
    {

      //has to do with props, and allows the view to interact or display
      //the data
      breads: foundBreads,
      title: 'Index Page'
    }
  ) 
      })
  // res.render('index',
  //   {
  //     breads: Bread,
  //     title: 'Index Page'
  //   }
  // )
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})



// EDIT -- breads/index/edit
//has to go above show route
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
}) 

// show, if the user searches for a bread
//that doesn't exist, they will be sent 
//to a 404 page

// SHOW
breads.get('/:id', (req, res) => {
 Bread.findById(req.params.id).then(foundBread =>{
   res.render('show', {
     bread: foundBread
   })
 }).catch(err =>{
   res.render('404')
 })
 
})

  // CREATE
  breads.post('/', (req, res) => {
    if(!req.body.image) {
        req.body.image = undefined 
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    // console.log(req.body.image)
    Bread.create(req.body)
    res.redirect('/breads')
  })
  

  // DELETE   breas/:id
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})


// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})



module.exports = breads