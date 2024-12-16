const express = require('express')
const app = express();
const cors = require('cors')
let leet = require('./leetcode');
const path = require('path');
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}))
console.log("hello");


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});