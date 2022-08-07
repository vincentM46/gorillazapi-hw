const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Album = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        track_count: { type: String, required: true },
        release_date: { type: String, required: true },
        album_length: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('albums', Album)