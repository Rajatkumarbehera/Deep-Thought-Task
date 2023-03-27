const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/data.json', ((req, res) => {
    fs.readFile(__dirname + "/data.json", "utf8", (err, data) => {
        res.end(data);
    })
}))

app.listen(8000);