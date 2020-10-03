const {Sequelize} = require("sequelize");

const DB = new Sequelize('vialogik_casadelacopia','vialogik_casa','+;%saV!3pM7(',{
    host : 'vialogika.com.mx',
    dialect : "mysql"
});

module.exports = {DB};