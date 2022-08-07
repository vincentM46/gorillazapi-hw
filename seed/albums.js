const db = require('../db');
const Album = require('../models/album');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const albums = [
        { name: 'Gorillaz', image: 'https://upload.wikimedia.org/wikipedia/en/4/41/GorillazAlbum.jpg', track_count: '17', release_date: 'March 26 2001', album_length: '61:24' },
        { name: 'Demon Days', image: 'https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG', track_count: '15', release_date: 'May 11 2005', album_length: '50:47' },
        { name: 'Plastic Beach', image: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg', track_count: '16', release_date: 'March 3 2010', album_length: '56:46' },
        { name: 'The Fall', image: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Fall_%28Gorillaz_album%29_cover.jpg', track_count: "15", release_date: "April 19 2011", album_length: "43:28" },
        { name: 'Humanz', image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/HumanzGorillaz.png', track_count: '20', release_date: 'April 28 2017', album_length: "49:23" },
        { name: 'The Now Now', image: 'https://upload.wikimedia.org/wikipedia/en/7/79/Gorillaz_-_The_Now_Now.jpg', track_count: '11', release_date: 'Juny 29 2018', album_length: "40:42" },
        { name: 'Song Machine, Season One: Strange Timez', image: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Song_Machine_Season_One_Strange_Timez.png', track_count: '11', release_date: 'October 23 2020', album_length: '42:58' }
    ]
    await Album.insertMany(albums)
    console.log('Created some albums')
}
const run = async() => {
    await main()
    db.close()
}
run()