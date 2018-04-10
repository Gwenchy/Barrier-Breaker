const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideosId = new Schema({
    videosId: String,
    language: String,
    order: Number
});


module.exports = mongoose.model('VideosId', VideosId);