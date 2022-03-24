// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

baker.get('/', (req, res) => {
    Baker.find()
    .populate('breads')
    .then(foundBakers => {
        res.send(foundBakers)
    })
} )

baker.get('/:id', (req, res)=>{
    Baker.findById(req.params.id)
    .populate('breads')
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

baker.delete('/:id', (req, res)=>{
    Baker.findByIdAndDelete(req.params.id)
    .then(deletedBaker => {
        res.status(303).redirect('/breads')
    })
})

// export (I'm assuming that as we add routes with baker they also get exported)
module.exports = baker                    