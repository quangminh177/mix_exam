const knex = require('../config/knex');
const { managerModelAdmin } = require('../models/manage.model');
const table = 'question';

let QuestionController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

QuestionController.getDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    let data = await selectedTable.getAllData();
    data.map(item => {
        let createRaw = new Date(item.created_at);
        let updateRaw = new Date(item.update_at);
        item.created_at = createRaw.toLocaleString('vi-VN');
        item.update_at = updateRaw.toLocaleString('vi-VN');
    })
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

QuestionController.addDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get data
    let data = req.body;
    data.question_weight = 0.25;
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
        message: "Bạn đã thêm câu hỏi thành công",
        return: isAdd
    })
}

QuestionController.addAnswerToTable = async (req, res) => {
    let selectedTable = managerModelAdmin('answer');
    // Get data
    let data = req.body;
    data.created_id = 1;
    data.created_at = new Date();
    data.update_id = 1;
    data.update_at = new Date();
    console.log(data);
    const isAdd = await selectedTable.insertDataToDb(data, 'answer');
    if(!isAdd) res.status(404).json({
        message: 'Error'
    })
    else res.status(200).json({
        success: true,
        message: "Bạn đã thêm đáp án thành công"
    })
}

QuestionController.getAnswerFromQuestion = async (req, res) => {
    let selectedTable = managerModelAdmin('answer');
    // Get data
    let {id, ...table} = req.params;
    const sql = selectedTable.getDataByQuestionId(id);
    const data = await selectedTable.queryDatabase(sql);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else res.status(200).json(data)
}

module.exports = QuestionController;