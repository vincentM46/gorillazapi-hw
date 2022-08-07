const Album = require('../models/album');
const Song = require('../models/song');

const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find()
        return res.status(200).json({ albums })
    } catch(error) {
        return res.status(500).send(error.message)
    }
}
const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find()
        return res.status(200).json({ songs })
    } catch(error) {
        return res.status(500).send(error.message)
    }
}
const getAlbumById = async (req, res) => {
    try {
        const {id} = req.params
        const album = await Album.findById(id)
        if(album) {
            return res.status(200).json({ album })
        }
        return res.status(404).send('Error, requested page not found')
    } catch(error) {
        return res.status(500).send(error.message)
    }
}
const getSongById = async (req, res) => {
    try {
        const {id} = req.params
        const song = await Song.findById(id)
        if(song) {
            return res.status(200).json({ song })
        }
        return res.status(404).send('Error, requested page not found')
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAlbums,
    getAllSongs,
    getAlbumById,
    getSongById
}