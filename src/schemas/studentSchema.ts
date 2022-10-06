import joi from "joi"

const studentSchema = joi.object({
    userId: joi.number().integer().required(),	
    groupId: joi.number().integer().required()
});

export default studentSchema;