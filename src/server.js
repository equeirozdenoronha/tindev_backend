const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const server = express();

server.use(cors())

mongoose.connect('mongodb+srv://ezequiel:ezequiel@cluster0-teuck.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(3030) 