const mongoose = require('mongoose')
// creating shorthand for schema constructor 
// const Baker = require('./baker.js')
const { Schema } = mongoose

// console.log(process.env.MONGO_URI)
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
  baker: { 
    type: Schema.Types.ObjectId,
    ref: 'Baker' 
  }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
 console.log(this.baker)
  return `${this.name} was baked by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
