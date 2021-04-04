const Sequelize = require('Sequelize');
const connection = new Sequelize('peg','root','',{
    host:'localhost',
    dialect:'mysql'
    
    });

const Resposta = connection.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});




Resposta.sync({force: false});




module.exports = Resposta;