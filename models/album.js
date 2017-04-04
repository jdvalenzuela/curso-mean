'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
    title:              String,
    description:        String,
    year:               Number,
    image:              String,
    //referencia a otro objeto/documento de la base de dato
    artist:             { type: Schema.ObjectId, ref: 'Artist'}
}); 

module.exports = mongoose.model('Album', AlbumSchema);