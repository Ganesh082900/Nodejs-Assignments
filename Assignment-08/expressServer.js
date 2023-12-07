const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")

const app = express();
const PORT = process.env.PORT || 8081

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// provide the mangoDB password/link to connect to the DB
mongoose.connect(process.env)
    .then((response) => {
        console.log("Connected to DB successfully ! ")
    }).catch((error) => {
        console.log("Connection Failed")
    })

app.use("/user", userRoute)
app.use("/post", postRoute)

app.use((req, res) => {
    res.status(200).json({
        message: "Server running Successfuylly ! "
    });
});


app.listen(PORT)

module.exports = app