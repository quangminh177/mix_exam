const connection = require("../config/database");
const { hashPassword } = require("../utils/bcypt");
const newDate = require("../utils/time");
const CommonModel = require("./common.model");

class AnswerModel extends CommonModel{
    getTableName() {
        return 'answer';
    }

    getAllData() {
        return `SELECT * FROM answer `;
    }

    getDataByQuestionId(id) {
        return `SELECT * FROM answer WHERE question_id = ${id} AND delete_flag = 0`;
    }

    update(req, res) {

    }

    delete() {

    }

}

module.exports = AnswerModel;