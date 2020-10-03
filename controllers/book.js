const {Op} = require("sequelize");
const Book = require("../models/book");

exports.getBooks = (req,res,next)=>{
    let c = req.query.career;
    let q = req.query.quarter;
    if (c && q){
        Book.findAll({
            where : {
                career : c,
                cuatri : q
            }
        }).then(r=>{
            if (r.length){
                res.send({success : true,message :"",payload : r});
                return
            }
            res.send({success : true,message :"Sin resultados",payload : r});
        }).catch(err=>{
            console.log(err);
        })
    }else{
        res.send({error : true, message : 'All parameters must be passed'})
    }
}