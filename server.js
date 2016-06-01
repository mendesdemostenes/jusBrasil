var express = require('express'); //requisição do módulo express do node
var app = express();
var bodyParser = require('body-parser'); //múdulo usado para permitir codificação utf8
var urlencoded = bodyParser.urlencoded({extended: false});
var entities = []; //vetor usado pra armazenar os objetos anexados (somente na sessão do servidor)

//evento que vai lidar com o método post do formulário
app.post('/entities', urlencoded, function (req, res) {
  //variável temporária pra armazenar o objeto e anexá-lo
  var temp = {
    title: req.body.title,
    type: req.body.type
  };

  entities.push(temp);
  res.send("Anexado com Sucesso.");
});

//evento que vai lidar ocm o método get do formulário
app.get('/entities', function (req, res) {
  //variável temporária - vetor pois a busca pode responder com mais de um objeto
  var temp = [];

  //testa cada objeto presente em entities
  //se pelo menos um dos campos for compatível - retorna
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
  
  //resposta do servidor em forma de STRING de JSON
  res.send(JSON.stringify(temp));
});

//faz com oque o servidor fique ouvindo na porta 8090
var server = app.listen(8090, function () {
  console.log("Servidor rodando em http://127.0.0.1:8090");
});
