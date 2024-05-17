const knex = require('../config/knex');
const { managerModelAdmin } = require('../models/manage.model');
const table = 'course';

let CourseController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

CourseController.getDataToTable = async (req, res) => {
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

CourseController.addDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    let data = req.body;
    data.created_id = 1;
    data.created_at = new Date();
    data.update_id = 1;
    data.update_at = new Date();
    console.log(data);
    const isAdd = await selectedTable.insertDataToDb(data, table);
    if(!isAdd) res.status(404).json({
        message: 'Error'
    })
    else res.status(200).json({
        success: true,
        message: "Bạn đã thêm môn học thành công"
    })
}

module.exports = CourseController;