const UserModel = require("../models/user.model")
const { managerModelAdmin } = require('../models/manage.model');
const knex = require("../config/knex");

const table = 'user';
// Select Table
let selectedTable = managerModelAdmin(table);

// Get home page
let getHomePage = (req, res) => {
    return res.render('home.ejs')
}

let login = (req, res) => {
    res.render('login');
}

// Get to create user page
let createUser = (req, res) => {
    return res.render('user/createUser.ejs')
}

// Post user info to database after create
let postUser = async(req, res) => {
    await UserModel.create(req);
    res.redirect('/admin/get-users')
}

// Display User table 
let displayUsers = async (req, res) => {
    let mySQL = selectedTable.getAllData();
    let data = [];
    await knex.raw(mySQL).then(
        (result) => {
           data = result[0];
        },
        (error) => {
            console.log(error)
        }
    );
    // Query db
    // let data = await UserModel.getAllData();
    res.render('user/displayUser.ejs', {
        users: data
    })
}

// Edit User info
let getEditUser = async (req, res) => {
    let userId = req.query.id;
    let data = await UserModel.display(userId);
    return res.render('/user/editUser.ejs', {
        userData: data
    })
}

let updateUser = () => {

}

// Delete User
let deleteUser = () => {

}

module.exports = {
    getHomePage: getHomePage,
    login: login,
    createUser: createUser,
    postUser: postUser,
    displayUsers: displayUsers,
    getEditUser: getEditUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}