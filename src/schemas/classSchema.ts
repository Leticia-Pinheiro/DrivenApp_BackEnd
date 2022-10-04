import joi from "joi"

const classSchema = joi.object({
    name: joi.string().required()	
});

export default classSchema;