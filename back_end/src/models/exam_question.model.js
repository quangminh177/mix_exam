const connection = require("../config/database");
const { hashPassword } = require("../utils/bcypt");
const newDate = require("../utils/time");

class ExamQuestionModel{
    getTableName() {
        return 'chapter';
    }

    getAllData() {
        return `SELECT * FROM chapter `;
    }

    displayById(id) {
        return `SELECT * FROM chapter WHERE id = ${id}`;
    }

    update(req, res) {

    }

    delete() {

    }

}

module.exports = ExamQuestionModel;