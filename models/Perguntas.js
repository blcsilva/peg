const Sequelize = require('Sequelize');
const connection = new Sequelize('peg','root','',{
    host:'localhost',
    dialect:'mysql'
    
    });

const Perguntas = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Perguntas.sync({force: false}).then(() => {});

module.exports = Perguntas;