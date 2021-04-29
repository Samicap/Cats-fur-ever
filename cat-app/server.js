const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  // change to app.post later
  res.send({
    token: 'test123'
  });
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login')); 