const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3001
// app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
// app.use(express.json());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// your code goes here

function check(num1, num2, res) {
    if (num1 > 10e5 || num2 > 10e5) {
        return res.status(400).json({
            status: "Error",
            message: "Overflow"
        })
    }
    if (num1 < -10e5 || num2 < -10e5) {
        return res.status(400).json({
            status: "Error",
            message: "Underflow"
        })
    }
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        return res.status(400).json({
            status: "Error",
            message: "Invalid data types"
        })
    }
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({
            status: "Failure",
        })
    }
}



app.post("/add", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let response = check(num1, num2, res)
    if (response) {
        console.log("excecuted")
    } else {
        res.status(200).json({
            status: "success",
            message: "the sum of given two numbers",
            sum: num1 + num2
        })
    }
})
app.post("/sub", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let response = check(num1, num2, res)
    if (response) {
        console.log("excecuted")
    } else {
        res.status(200).json({
            status: "success",
            message: "the difference of given two numbers",
            difference: num1 - num2
        })
    }
})
app.post("/multiply", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    let response = check(num1, num2, res)
    if (response) {
        console.log("excecuted")
    } else {
        res.status(200).json({
            status: "success",
            message: "the product of given two numbers",
            result: num1 * num2
        })
    }
})
app.post("/divide", (req, res) => {
    let num1 = req.body.num1
    let num2 = req.body.num2
    if (num2 === 0) {
        return res.status(400).json({
            status: "Error",
            message: "Cannot divide by zero",
        })
    }
    let response = check(num1, num2, res)
    if (response) {
        console.log("excecuted")
    }
    else {
        res.status(200).json({
            status: "success",
            message: "the division of given two numbers",
            result: num1 / num2
        })
    }
})


app.use((req, res) => {
    res.json("Hello World !")
})


app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;