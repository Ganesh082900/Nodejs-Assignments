var http = require("http");
// const express = require("express")
// const app = express()

// app.get("/welcome", (req, res) => {
//     res.status(200).end(" Welcome to Dominos!")
// })


// app.get("/contact", (req, res) => {
//     res.status(200).json({
//         "phone": 18602100000,
//         "email": 'guestcaredominos@jublfood.com'
//     })
// })

const httpServer = http.createServer(handleServer);
const PORT = process.env.PORT || 8081

function handleServer(req, res) {

    if (req.url === "/welcome") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(" Welcome to Dominos!")
    }
    if (req.url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end("{phone: '18602100000',email: 'guestcaredominos@jublfood.com'}")
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end();
    }
}
httpServer.listen(PORT)
module.exports = httpServer;