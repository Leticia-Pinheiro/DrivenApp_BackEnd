import joi from "joi"

const updateGroupStudentSchema = joi.object({
    studentId: joi.number().integer().required(),	
    groupId: joi.number().integer().required()
});

export default updateGroupStudentSchema;