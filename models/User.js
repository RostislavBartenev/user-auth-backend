const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
          type: String
    },
    lastName: {
      type: String
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: 'Employee'
    }],
    active: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('User', userSchema)
