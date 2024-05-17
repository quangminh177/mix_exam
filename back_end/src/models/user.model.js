// const connection = require("../config/database");
const connection = require("../config/database");
const { hashPassword } = require("../utils/bcypt");
const newDate = require("../utils/time");
const CommonModel = require("./common.model");
const knex = require("../config/knex");

class UserModel extends CommonModel{
    getTableName() {
        return 'user'
    }

    getAllData() {
        return `SELECT * FROM user WHERE delete_flag = 0`;
    }

    async getDataByName(userName) {
        let data = await knex('user')
                    .select('user.name', 'user.id', 'user.code', 'user.email', 'user.gender', 'user.birthday', 'user.school', 'user.faculty')
                    .where('user.name', userName)
                    .where('user.delete_flag', 0)
        return data;
    }

    getDataById(userId) {
        return `SELECT * FROM user WHERE id = ${userId}`;
    }

    searchPerson(email) {
        return `SELECT * FROM user WHERE email = '${email}'`;
    }

    async create(req, res) {
        let name = req.body.name;
        let code = req.body.code;
        let gender = req.body.gender;
        let birthday = req.body.birthday;
        let email = req.body.email;
        let password = await hashPassword(req.body.password);
        let school = req.body.school;
        let faculty = req.body.faculty;
        let created_at = newDate();
        let update_at = created_at;
        let delete_flag = 0;
        let old_id = 0;

        const insert = {name, code, gender, birthday, email, password, school, faculty, created_at, update_at, delete_flag, old_id};
         // Query database
        connection.query('INSERT INTO user SET ?', insert, (err, results) => {
            if(err) console.log(err);
        })
    }

    update(req, res) {

    }

    delete() {

    }

}

module.exports = UserModel;