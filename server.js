const express        = require('express');
const bodyParser     = require('body-parser');
var serveStatic      = require('serve-static');
const app            = express();
const helper    = require('./helper.js');
app.use(bodyParser.json())
app.use(serveStatic(__dirname + "/public"));

// API routes

app.post('/withdraw', (req, res) => {
    let amount = req.body.amount;
    let resp = helper.cashMachine(parseInt(amount));
    res.status(resp.statusCode);
    res.json(resp);
})


const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});