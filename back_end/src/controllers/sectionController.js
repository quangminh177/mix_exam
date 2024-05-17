const { managerModelAdmin } = require('../models/manage.model');
const table = 'section';

let SectionController = {};
/**
 * Returns jwt token if valid email and password is provided
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */

SectionController.getDataToTable = async (req, res) => {
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

SectionController.getSectionListByChapter = async (req, res) => {
    let selectedTable = managerModelAdmin(table);
    let {name, chapter_id} = req.params;
    // Get data
    let data = await selectedTable.displayByChapterId(chapter_id);
    if(!data) res.status(404).json({
        message: 'Error'
    })
    else {
        res.status(200).json(data)
    }
}

SectionController.addDataToTable = async (req, res) => {
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
        message: "Bạn đã thêm phần mới thành công",
    })
}

module.exports = SectionController;