var mongoose = require('mongoose')
var Schema = mongoose.Schema

const linkSchema = new Schema ({

    public: String,
    target: String,
    status: Boolean
})

module.exports = mongoose.model('Link',linkSchema)