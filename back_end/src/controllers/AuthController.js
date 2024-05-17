// const HttpStatus = require("http-status-codes");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// var squel = require("squel");
// const User = require("../models/database/user.model.js");
// const Oauthen2 = require("../models/database/oAuthen2.model.js");
// const Customer = require("../models/database/customer.model.js");
// const OAuthen2Customer = require("../models/database/oAuthen2Customer.model.js");
// const express = require("express");
// const {
//   returnOK,
//   returnNotAuthen,
//   returnNotFound,
// } = require("../utils/returnResponse.js");
// var oauthen2 = new Oauthen2();
// var oAuthen2Customer = new OAuthen2Customer();
// var lstLogin = [];
// var lstLoginCustomer = [];
// var ejs = require("ejs");
// //reset password customer
// const { getRamdomData } = require("../utils/utilsString.js");
// var nodemailer = require("nodemailer");
// const option = {
//     service: "gmail",
//     auth: {
//         user: process.env.MAIL_USERNAME, // email hoặc username
//         pass: process.env.MAIL_PASSWORD, // password
//     },
// };
// var transporter = nodemailer.createTransport(option);
const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const knex = require("../config/knex");
const { managerModelAdmin } = require("../models/manage.model");
const connection = require("../config/database");
let authCtrl = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
require('dotenv').config();
const jwt = require('jsonwebtoken');
const userModel = new UserModel();
authCtrl.insertToken = async function (accessToken, refreshToken){
    await knex('authen2').insert({
      id: 1,
      accessToken: accessToken,
      refreshToken: refreshToken
    })
}

authCtrl.login =  async (req, res, next) => {
  console.log("sucessful");
  await knex.raw(userModel.searchPerson(req.body.email))
  .then((user) => {
        if (user[0]) {
        console.log(user[0][0].password);
        bcrypt.compare(req.body.password, user[0][0].password, (err,same)=>{
          if(same){
              console.log('Tài khoản mật khẩu chính xác');
              // Create accessToken
              const accessToken = jwt.sign(
                  {
                  id: user[0][0].id,
                  email: user[0][0].email,
                  password: user[0][0].password
                  },
                  process.env.JWT_KEY,
                  {
                      expiresIn: "30s"
                  }
              )
              // Create refreshToken
              const refreshToken = jwt.sign(
                {
                id: user[0][0].id,
                email: user[0][0].email,
                password: user[0][0].password
                },
                process.env.JWT_REFRESH_KEY,
                {
                    expiresIn: "365d"
                }
            )
              console.log(accessToken);
              authCtrl.insertToken(accessToken,refreshToken); // insert accessToken and refreshToken in authen2
              res.status(200).json({
                success: true,
                token: accessToken,
                refreshToken: refreshToken,    
                user: user[0]
              })
          }
          else {
              res.status(403).json({
                success: false,
                message: "Tài khoản mật khẩu KHÔNG chính xác",
              })
          }
      })
        } 
        else res.status(403).json({
            success: false,
            message: "Tài khoản mật khẩu KHÔNG chính xác",
          })
    })
    .catch((error) => {
        console.log(error);
    });
    
}
  // connection.query('SELECT * FROM user WHERE email= ?',req.body.email,(err,user)=>{
  //     console.log(user);
  //     console.log(req.body);
  // .fetch({ require: false })
  

  // })
authCtrl.logout =async function (req,res,next) {
  const accessToken = req.headers.accessToken;
    if(!accessToken){
      res.status(403).json({
        success: false,
        message: "Bạn chưa đăng nhập!"
      })
    }
    else{
      jwt.verify(accessToken,process.env.JWT_ACCESS_KEY, (err,user)=>{
        if(err) res.status(403).json({
          success: false,
          message: "Token không đúng"
        })
        
        //Xóa accessToken trong bảng authen2 và xóa trong localStorage
      })
    }
}

module.exports = authCtrl;
