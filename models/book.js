const {Model,DataTypes} = require("sequelize");
const {DB : sequelize} = require("../database/connection");

class Book extends Model {

}

Book.init({
    id :{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        unique : true,
        primaryKey: true
    },
    title : DataTypes.STRING,
    author : DataTypes.STRING,
    publisher : DataTypes.STRING,
    edicion : DataTypes.STRING,
    career : DataTypes.STRING,
    cuatri : DataTypes.STRING,
    copies : DataTypes.STRING,
    duplexMode : DataTypes.STRING,
    filepath : DataTypes.STRING,
    bookStatus : DataTypes.STRING
},{
    sequelize,
    tableName : "book"
})

module.exports = Book;