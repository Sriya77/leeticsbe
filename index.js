// 


const express = require('express');
const app = express();
const cors = require('cors');
let leet = require('./leetcode');
const path = require('path');

// Enable CORS
app.use(cors({
    origin: '*'
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Serve index.html as a fallback for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Dynamic route for "/:id"
app.get('/:id', leet.leetcode);

// Start the server
app.listen(3001, () => {
    console.log(`App is running on port 3001`);
});
