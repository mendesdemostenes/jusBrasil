var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var entities = [];

app.post('/entities', urlencoded, function (req, res) {
  var temp = {
    title: req.body.title,
    type: req.body.type
  };

  entities.push(temp);
  res.send("Anexado com Sucesso.");
});

app.get('/entities', function (req, res) {
  var temp = [];

  entities.forEach(function (entity) {
    if (entity.title === req.query.palavra_chave) {
      temp.push(entity);
    } else if (entity.type === req.query.palavra_chave) {
      temp.push(entity);
    } else {
      return;
    }
    return;
  });

  res.send(JSON.stringify(temp));
});

var server = app.listen(8090, function () {
  console.log("Servidor rodando em http://127.0.0.1:8090");
});
