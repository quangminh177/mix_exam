const UserModel = require('../models/user.model')
const { managerModelAdmin } = require('../models/manage.model');
const {hashPassword} = require('../utils/bcypt');

const table = 'user';

let UserController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

UserController.getDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get SQL Query
    let sql = selectedTable.getAllData();
    // Get data
    let rawData = await selectedTable.queryDatabase(sql);
    let data = JSON.parse(JSON.stringify(rawData));
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

UserController.getDataByName = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    let data = await selectedTable.getDataByName(req.body.name);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

UserController.addDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    req.body.password = await hashPassword(req.body.password)
    let data = req.body;
    console.log(req.body);
    data.created_at = new Date();
    data.update_at = new Date();
    console.log(data);
    const isAdd = await selectedTable.insertDataToDb(data, table);
    if(!isAdd) res.status(404).json({
        message: 'Error'
    })
    else res.status(200).json({
        success: true,
        message: "Bạn đã thêm người dùng thành công"
    })
}

module.exports = UserController;