import joi from "joi"

const tutorSchema = joi.object({
    userId: joi.number().integer().required(),	
    groupId: joi.number().integer().required()
});

export default tutorSchema;