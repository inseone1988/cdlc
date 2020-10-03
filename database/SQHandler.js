const {DB : sequelize} = require("../database/connection");

exports.authenticate = async ()=>{
    return sequelize.authenticate();
}

exports.sync = async (force)=>{
    return sequelize.sync({force : force});
}

exports.close = async ()=>{
    return sequelize.close();
}