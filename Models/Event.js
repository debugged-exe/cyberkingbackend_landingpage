const mongoose = require('mongoose')
const {Schema} = mongoose;
const eventSchema = Schema({
    	name: String,
    	email: String,
    	event: String
    });


module.exports = mongoose.model('events', eventSchema);