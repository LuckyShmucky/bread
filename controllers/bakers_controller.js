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


// SHOW
baker.get('/:id', (req, res)=>{
    Baker.findById(req.params.id)
    //this allows us to only show one bread (breads is part of the baker schema (via the virtual) so that is how this is connecting)
    .populate({
        path: 'breads',
        options: {limit: 1}
    })
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