const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  res.send({
    randomNumber: randomNumber,
  });
});

app.listen(3000);
