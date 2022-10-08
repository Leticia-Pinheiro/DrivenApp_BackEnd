import joi from 'joi'

const updateCompiledSchema = joi.object({
    contentsId: joi.number().integer().required(),
    compiled: joi.string().required()   
});

export default updateCompiledSchema;