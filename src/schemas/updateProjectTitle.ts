import joi from 'joi'

const updateProjectTitleSchema = joi.object({
    projectId: joi.number().integer().required(),
    title: joi.string().required()   
});

export default updateProjectTitleSchema;