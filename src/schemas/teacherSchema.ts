import joi from "joi"

const teacherSchema = joi.object({
    userId: joi.number().integer().required(),	
    classId: joi.number().integer().required(),
    disciplineId: joi.number().integer().required()
});

export default teacherSchema;