const fs = require("fs")
const http = require("http")
const path = require("path")


const input = "Ganesh"
let data = `<h1> Hello World </h1>\n<p> This is ${input} .... </p>`
fs.writeFile(path.join(__dirname, "index.html"), `${data}`, (error) => {
    if (error) {
        throw error
    }
    console.log("Created File")
})


fs.readFile(path.join(__dirname, "index.html"), "utf-8", (error, data) => {
    if (error) {
        throw error
    } else {
        data = data
    }
    console.log(data)
})



const server = http.createServer((req, res) => {
    res.end(data)
    console.log("Server")
})

server.listen(5000) 