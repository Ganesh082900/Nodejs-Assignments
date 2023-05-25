const app = require('./app');
// const dotenv = require('dotenv');
const mongoose = require('mongoose');


// dotenv.config();
//connect to DB
// mongoose.connect("",process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// })

//Created by myself ...

mongoose.connect("This is String to connect DB",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then((response) => {
        console.log("Connected to Mango-DB")
    }).catch((error) => {
        console.log("Issue regarding the connecting with Mango-DB")
    })

app.listen(3001, () => console.log('Server running......'));

