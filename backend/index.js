const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://thiagorpereira:thiagorpereira@cluster0-5us0j.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Worlddddkaka'});
});

app.listen(3333);