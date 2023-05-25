const express = require("express")
const postRoute = express.Router();
const Post = require("../model/post")
const authentication = require("../middleware/auth")

// <<< POST METHOD for creation of post >>>>>

postRoute.post("/createpost", authentication, (req, res) => {
    const postData = req.body;
    const post = new Post({
        city: postData.city,
        description: postData.description,
        image: postData.image,
        music: postData.music,
        author: req.userId
    });
    post.save().then((record) => {
        res.status(201).json({
            message: "Posted Successfully !",
            data: record
        })
    }).catch((error) => {
        res.send(500).json({
            message: "Error during posting",
            error: error
        })
    })
});

// <<< GET METHOD for Reading the posts >>>>>

postRoute.get("/getpost/:id", (req, res) => {
    Post.findOne({ _id: req.params.id }).then((record) => {
        res.status(200).json({
            message: "Fetched Data",
            data: record
        })
    }).catch(error => {
        res.status(500).json({
            message: "Failed to fetch data",
            error: error
        })
    })
})

// <<< PUT METHOD for Updating the post >>>>>

postRoute.put("/updatepost/:id", authentication, (req, res) => {
    const postId = req.params.id
    const newData = req.body;
    Post.findOneAndUpdate({ _id: postId, author: req.userId }, newData).then((updatedData) => {
        if (!updatedData) {
            res.status(404).json({
                message: "Page not found",
                error: error
            })
        }

        res.status(200).json({
            message: "Update successfull",
            data: updatedData
        })
    }).catch(error => {
        res.status(500).json({
            message: "Failed to update",
            error: error
        })
    })
})

// <<< DELETE METHOD for Deleting the post >>>>>

postRoute.delete("/deletepost/:id", authentication, (req, res) => {

    Post.deleteOne({ _id: req.params.id }).then((response) => {
        res.status(200).json({
            message: "Post deleted"
        });
    }).catch((error) => {
        res.status(500).json({
            message: "Error during deleting the Post"
        })
    })

})



module.exports = postRoute