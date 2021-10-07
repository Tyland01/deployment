const express = require('express');
const path = require('path');

const app = express();
// USE /styles/style.css INSTAD OF /css
app.use('/styles/style.css', express.static(path.join(__dirname, '../styles/style.css')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`BBQ running on port ${port}.`)
});

