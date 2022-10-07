import joi from 'joi'

const contentsSchema = joi.object({
    title: joi.string().required(),
    compiled: joi.string().required(),
    moduleId: joi.number().integer().required()
});

export default contentsSchema;