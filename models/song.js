const mongoose = require('mongoose');
const album = require("./album");
const Schema = mongoose.Schema;

const Song = new Schema(
    {
        title: { type: String, required: true },
        track_number: { type: String, required: true },
        song_length: { type: String, required: true },
        album_id: { type: Schema.Types.ObjectId, ref: 'album_id', required: true },
        explicit: { type: Boolean, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('songs', Song)