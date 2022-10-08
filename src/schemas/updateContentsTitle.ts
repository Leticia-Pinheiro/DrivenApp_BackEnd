import joi from 'joi'

const updateTitleSchema = joi.object({
    contentsId: joi.number().integer().required(),
    title: joi.string().required()   
});

export default updateTitleSchema;