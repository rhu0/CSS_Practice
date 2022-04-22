const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile('./index.html');
})

app.listen(port, ()=> console.log('Listening on port: ', port))