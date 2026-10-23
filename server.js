// server.js
const express = require('express');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  const shuffled = _.shuffle(numbers);
  res.send(`Hello World 🚀 - Shuffled numbers: ${shuffled}`);
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});


