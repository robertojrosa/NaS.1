var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema ({

    user: String,
    type: String,
    name: [{ first: String, second: String }],
    pwd: String,
    status: String
})

module.exports = mongoose.model('User',userSchema)