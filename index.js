const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.static('uploads'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {

    }
})