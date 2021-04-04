const Sequelize = require("sequelize");
const connection = new Sequelize('peg','root','',{
host:'localhost',
dialect:'mysql'

});

connection
.authenticate()
.then(()=>{

console.log("Conexão feita com o banco de dados")  

})
.catch((msgErro)=>{

console.log(msgErro)  

});



module.exports = {connection}