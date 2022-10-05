import joi from "joi"

const groupSchema = joi.object({
    name: joi.string().required(),
    classId: joi.number().integer().required()	
});

export default groupSchema;