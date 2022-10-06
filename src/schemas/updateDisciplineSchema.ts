import joi from "joi"

const updateDisciplineSchema = joi.object({
    teacherId: joi.number().integer().required(),	
    disciplineId: joi.number().integer().required()
});

export default updateDisciplineSchema;