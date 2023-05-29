// Defining the mongoose.Schema for the Posts

const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    city: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    music: { type: String, required: true },
    // This key is generated by the schema itself.
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Post", postSchema)
