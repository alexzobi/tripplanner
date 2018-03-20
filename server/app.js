const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(volleyball);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// placeholder route
app.get('/', (req, res, next) => {
  res.send('Yo');
});

app.use('/', (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
  db.sync()
  .then(function () {
    console.log("Database synced");
  })
  .catch(function (err) {
    console.error("Trouble right here in River City", err, err.stack);
  });
});
