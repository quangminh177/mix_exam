const connection = require("../config/database");
const knex = require("../config/knex");
const { hashPassword } = require("../utils/bcypt");
const newDate = require("../utils/time");
const CommonModel = require("./common.model");

class QuestionModel extends CommonModel{
    getTableName() {
        return 'question';
    }
    
    async getAllData() {
        let data = await knex('question')
                    .join('level', 'question.level_id','=', 'level.id')
                    .join('user', 'question.created_id','=', 'user.id')
                    .join('section', 'question.section_id','=', 'section.id')
                    .join('chapter', 'section.chapter_id','=', 'chapter.id')
                    .join('course', 'chapter.course_id','=', 'course.id')
                    .select('question.*', 'level.level', 'section.section_name','section.chapter_id','chapter.chapter_name','course.name as course_name','user.name as created_user')
                    .where('question.delete_flag', '0')
                    .orderBy('id');
        return data;
    }

    getDataById(id) {
        return `SELECT * FROM question WHERE id = ${id} AND delete_flag = 0`;
    }

}

module.exports = QuestionModel;