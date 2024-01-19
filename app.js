const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const randomNumbers = Array.from({ length: 10 }, (_, i) => Math.floor(Math.random() * 100));

  res.send({
    randomNumbers: randomNumbers,
  });
});

app.listen(3000);
