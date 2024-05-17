const { managerModelAdmin } = require('../models/manage.model');
const table = 'chapter';

let ChapterController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

ChapterController.getDataToTable = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    // Get SQL Query
    let sql = selectedTable.getAllData();
    // Get data
    let data = await selectedTable.queryDatabase(sql);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json({
            data: data
        })
    }
}

ChapterController.getChapterListByCourse = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    let {name, course_id} = req.params;
    // Get data
    let data = await selectedTable.displayByCourseId(course_id);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

ChapterController.addDataToTable = async (req, res) => {
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
        message: "Bạn đã thêm chương mới thành công",
    })
}

module.exports = ChapterController;