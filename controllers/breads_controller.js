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

// SHOW
// breads.get('/:arrayIndex', (req, res) => {
//    const pickBread = Bread[Number(req.params.arrayIndex)]
//    res.render('show', {
//        bread: pickBread
//    })
  
//   })

// SHOW
// breads.get('/:arrayIndex', (req, res) => {
//     res.render('Show', {
//       bread: Bread[req.params.arrayIndex]
//     })
//   })


// show, if the user searches for a bread
//that doesn't exist, they will be sent 
//to a 404 page
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
  })

module.exports = breads