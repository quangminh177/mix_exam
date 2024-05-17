const connection = require("../config/database");

const validateEmail = (req,res,next) =>{
    connection.query('SELECT * FROM user WHERE email = ?', req.body.email, (err,user)=>{
        if(user){
            console.log('Email đã tồn tại');
            res.redirect('/admin/create-user');
        }
        else next();
    })
}

module.exports = validateEmail;