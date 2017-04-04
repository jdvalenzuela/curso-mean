'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
    number:     String,
    name:       String,
    duration:   String,
    file:       String,
    //referencia a otro objeto/documento de la base de datos
    album:      { type: Schema.ObjectId, ref: 'Album'}
}); 

module.exports = mongoose.model('Song', SongSchema);