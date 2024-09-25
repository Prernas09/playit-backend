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
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('video'), (req, res) => {
    if(!req.file){
        return res.status(400).send('No file uploaded.')
    }
    res.json({videoUrl: `http://localhost:${PORT}/${req.file.filename}`})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})