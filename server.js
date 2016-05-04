var express = require('express');
var app = express();

app.use(express.static('app/public'));

app.listen(3000);

console.log('localhost:3000');