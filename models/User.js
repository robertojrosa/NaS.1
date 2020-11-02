var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema ({

    user: {type: String, trim: true, default: ''},
    type: {type: String, trim: true, default: ''},
    name: [{ first: {type: String, trim: true, default: ''}, second: {type: String, trim: true, default: ''} }],
    email: {type: String, trim: true, default: ''},
    pwd: {type: String, trim: true, default: ''},
    status: {type: String, trim: true, default: ''}
})

module.exports = mongoose.model('User',userSchema)