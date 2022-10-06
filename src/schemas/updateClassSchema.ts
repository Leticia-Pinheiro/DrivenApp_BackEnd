import joi from "joi"

const updateClassSchema = joi.object({
    teacherId: joi.number().integer().required(),	
    classId: joi.number().integer().required()
});

export default updateClassSchema;