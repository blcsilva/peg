const Pergunta = require('../models/Perguntas');
const perguntas = null;


const index= (req, res) => {
    const perguntas = async ()=>{
        Pergunta.findAll({ raw: true, order:[
           ['id','DESC'] // ASC = Crescente || DESC = Decrescente
       ]}).then(perguntas => {
          res.Json({perguntas:perguntas})
       }
       )};
    
    res.render("index",{perguntas,
        
    });
  }

module.exports ={
    index,perguntas
}

