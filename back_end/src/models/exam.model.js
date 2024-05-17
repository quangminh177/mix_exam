const connection = require("../config/database");
const { hashPassword } = require("../utils/bcypt");
const knex = require("../config/knex");
const CommonModel = require("./common.model");

class ExamModel extends CommonModel{
    getTableName() {
        return 'exam';
    }

    async getAllData() {
        return await knex('exam')
                    .join('course', 'exam.course_id','=', 'course.id')
                    .join('user', 'exam.created_id','=', 'user.id')
                    .select('exam.*', 'course.name as course_name', 'user.name as created_user')
                    .where('exam.delete_flag', '0')
                    .orderBy('id');
    }

    async getDataById(examId) {
        let data = await knex('exam')
                    .join('course', 'exam.course_id','=', 'course.id')
                    .select('exam.*', 'course.name as course_name', 'course.code as course_code')
                    .where('exam.delete_flag', '0')
                    .where('exam.id', `${examId}`)
                    .orderBy('id');
        return data;
    }

    async getQuestionsById(examId) {
        let questionExamData = await knex('exam_question')
                                    .join('question', 'exam_question.question_id','=', 'question.id')
                                    .select('question.id','question.question_name','answer_mix')
                                    .where('exam_question.delete_flag', '0')
                                    .where('exam_question.exam_id', `${examId}`)
                                    .orderBy('exam_question.id');
        for(let i = 0; i < questionExamData.length; i++){
            questionExamData[i].answer_mix = questionExamData[i].answer_mix.split(',');
            questionExamData[i].answers = [];
            for(let j = 0; j< questionExamData[i].answer_mix.length; j++){
                questionExamData[i].answer_mix[j] = parseInt(questionExamData[i].answer_mix[j]);
                await knex('answer')
                    .where({
                        id: questionExamData[i].answer_mix[j],
                        question_id: questionExamData[i].id,
                        delete_flag: 0,
                    })
                    .select('id','correct_answer','answer_name')
                    .then(data => {
                        questionExamData[i].answers[j] = data[0]
                        if (data[0].correct_answer === 1)
                            questionExamData[i].correct_index = j;
                    });
            }
        }
        return questionExamData;
    }

    display() {
        return new Promise(async (resolve, reject) => {
            try {
                await connection.query('SELECT * FROM exam_question', (error, data) => {
                    if (error) console.log(error);
                    resolve(data);
                });
            }
            catch(e) {
                reject(e)
            }
        })
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

        const insert = {name, code, gender, birthday, email, password, school, faculty};
         // Query database
        connection.query('INSERT INTO exam_question SET ?', insert, (err, results) => {
            if(err) console.log(err);
        })
    }

    update(req, res) {

    }

    delete() {

    }

}

module.exports = ExamModel;