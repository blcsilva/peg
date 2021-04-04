var express = require('express');
var router = express.Router();
const connection = require('../config/connect');
const  controllerIndex = require('../controllers/controllerIndex');
const Pergunta = require('../models/Perguntas');

/* GET home page. */
// Rotas
router.get("/",(req, res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id','DESC'] // ASC = Crescente || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    });
});

router.get("/perguntar",(req, res) => {
  res.render("perguntar");
})

router.post("/salvarpergunta",(req, res) => {

  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Perguntas.create({
      titulo: titulo,
      descricao: descricao
  }).then(() => {
      res.redirect("/");
  });
});

router.get("/pergunta/:id",(req ,res) => {
  var id = req.params.id;
  Perguntas.findOne({
      where: {id: id}
  }).then(pergunta => {
      if(pergunta != undefined){ // Pergunta encontrada

          Resposta.findAll({
              where: {perguntaId: pergunta.id},
              order:[ 
                  ['id','DESC'] 
              ]
          }).then(respostas => {
              res.render("pergunta",{
                  pergunta: pergunta,
                  respostas: respostas
              });
          });

      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})

router.post("/responder",(req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;
  Resposta.create({
      corpo: corpo,
      perguntaId: perguntaId
  }).then(() => {
      res.redirect("/pergunta/"+perguntaId);
  });
});


module.exports = router;
