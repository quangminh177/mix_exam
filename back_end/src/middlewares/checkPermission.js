
const UserCourse = require('../models/userCourse.model');
const knex = require('../config/knex');
const userCourse = new UserCourse();

const CheckPermission = async (req, res, next)=>{
    await knex.raw(userCourse.getPermission(req.user.id))
    .then((data) => {
        req.permissionId = data[0][0].permission_id;
    })
    .catch(err => console.log((err)));
    next();
}

module.exports = CheckPermission;