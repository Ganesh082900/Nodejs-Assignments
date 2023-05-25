const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
// app.use(express.urlencoded());


// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// your code goes here

let initialData = require("./InitialData")
let length = initialData.length
// GET METHOD .. Default preload

app.get("/api/student", (req, res) => {
    res.status(200).json(initialData)
})

// GET METHOD For ID

app.get("/api/student/:id", (req, res) => {
    let studentId = Number(req.params.id);
    let student = initialData.find(item => item.id === studentId);

    if (student) {
        res.status(200).json(student)
    } else {
        res.status(404).json({
            message: "Page not found"
        })
    }
})

// POST METHOD 

app.post("/api/student", (req, res) => {

    let newId = length + 1;
    length = newId
    const { name, currentClass, division } = req.body
    if (name, currentClass, division) {
        const newData = {
            id: newId,
            name: name,
            currentClass: currentClass,
            division, division
        }
        initialData.push(newData)
        res.status(200).json(newData)
    } else {
        res.status(400).json({
            message: "Page not found"
        })
    }
})



// PUT METHOD

app.put("/api/student/:id", (req, res) => {

    const studentId = Number(req.params.id)
    const { id, name, currentClass, division } = req.body
    let student = initialData.find(item => item.id === studentId);

    if (student && id && name && currentClass && division) {

        student.id = id;
        student.name = name;
        student.currentClass = currentClass
        student.division = division

        res.status(200).json(student)
    } else {
        res.status(404).json({
            message: "Page not found"
        })
    }
})

// DELETE METHOD

app.delete("/api/student/:id", (req, res) => {
    let studentId = Number(req.params.id);
    let idx = initialData.findIndex(item => item.id === studentId);
    if (idx !== -1 && idx < initialData.length) {
        let data = initialData.splice(idx, 1)
        console.log(data)
        res.status(204).json({
            message: "Deleted successfully"
        })
    } else {
        res.status(404).json({
            message: "Page not found"
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   