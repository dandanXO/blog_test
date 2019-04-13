var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    yLink: {type: String}
});



module.exports = mongoose.model('Posts', schema,'posts');
