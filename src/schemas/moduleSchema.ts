import joi from 'joi'

const moduleSchema = joi.object({
    name: joi.string().required(),
    disciplineId: joi.number().integer().required(),	
    classId: joi.number().integer().required()
});

export default moduleSchema;