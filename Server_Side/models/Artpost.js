const mongoose = require('mongoose');


const ArtpostSchema = new mongoose.Schema({
    acronym: String,
    duration: String,
    longevity: String,
    definition: String,
    image: String,
    // image: {
    //     type: String, required: true
    // },
    // image: {
    //     data: Buffer, contentType: String
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Artpost', ArtpostSchema)

//Created a model for the CityPost

