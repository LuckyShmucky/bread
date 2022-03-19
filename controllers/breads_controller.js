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
breads.get('/:id/edit', (req, res) => {
Bread.findById(req.params.id)
.then(foundBread =>{
  res.render('edit', {
    bread: foundBread
  })
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


breads.get('/data/seed', (req, res)=> {
  res.render('addMultiple')
})

//insertMany
breads.post('/', (req, res)=>{
   //we need to find a way to make a form that takes multiple new breads \
 //by putting them in an array
  Bread.insertMany()
  .then(res.redirect('index'))
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
  

  // DELETE   breads/:id
  breads.delete('/:id', (req, res) => {
  //remember that you can turn an object into a array with object.key/value
    Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread =>{
      res.status(303).redirect('/breads')
    })
})


// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  })
  // Bread[req.params.arrayIndex] = req.body
})



module.exports = breads