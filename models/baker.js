// dependencies
const mongoose = require('mongoose')
const {
     Schema 
    } = mongoose
const Bread = require('./bread.js')

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },  
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, {toJSON: {virtuals: true}})

bakerSchema.virtual('breads', {
    ref: "Bread",
    localField: "_id",
    foreignField: "baker"
})

bakerSchema.post('findOneAndDelete', function(){
    console.log(Bread)
    Bread.deleteMany({ baker: this._conditions._id })
    .then(deleteStatus =>{
        console.log(deleteStatus)
    })
})

// this line officially creates the Schema and names it Baker
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker