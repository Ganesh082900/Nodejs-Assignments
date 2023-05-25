const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

//  POST METHOD....

router.post("/blog", (req, res) => {
    let data = req.body

    let blog = new Blog({
        topic: data.topic,
        description: data.description,
        posted_at: data.posted_at,
        posted_by: data.posted_by,
    })

    blog.save().then(record => {
        res.status(201).json({ body: record })
    }).catch(error => { res.status(500).json({ message: "Error during Post", error: error }) })
})

//  GET METHOD ...

router.get('/blog', async (req, res) => {
    try {
        const { page, search } = req.query;
        const query = {};

        if (search) {
            query.topic = { $regex: search, $options: 'i' };
        }

        const blogs = await Blog.find(query)
            .skip((page - 1) * 5)
            .limit(5);

        // Convert the blogs to a plain JavaScript object
        const blogsPlain = JSON.parse(JSON.stringify(blogs));
        res.status(200).json({ status: 'success', result: blogsPlain });

    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch blogs',
            status: 'error'
        });
    }
})
// PUT METHOD

router.put("/blog/:id", (req, res) => {
    let dataId = req.params.id
    let newData = req.body;
    Blog.findByIdAndUpdate({ _id: dataId }, newData)
        .then((newData) => {
            if (!newData) {
                res.status(404).json({
                    message: "Page not found",
                })
            }
            res.status(202).json({
                status: "success",
                result: newData
            })
        }).catch(error => {
            res.status(500).json({
                message: "Error during update of Blog",
                error: error
            })
        })

})

// DELETE METHOD

router.delete("/blog/:id", (req, res) => {
    Blog.deleteOne({ _id: req.params.id })
        .then((response) => {
            res.json({
                status: "Success",
                result: response
            })
        }).catch((error) => {
            res.status(500).json({
                message: "Error during deleting the Blog",
                error: error
            })
        })
})


module.exports = router;