const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yazarSchema = new Schema({
    id:{type:number},
    name:{type:String},
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    website:{type:String}
})

module.exports= mongoose.model("yazar", yazarSchema)