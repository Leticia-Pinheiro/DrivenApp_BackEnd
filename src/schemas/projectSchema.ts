import joi from 'joi'

const projectSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    moduleId: joi.number().integer().required()
});

export default projectSchema;