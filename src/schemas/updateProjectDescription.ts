import joi from 'joi'

const updateProjectDescriptionSchema = joi.object({
    projectId: joi.number().integer().required(),
    description: joi.string().required()   
});

export default updateProjectDescriptionSchema;