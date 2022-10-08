import joi from 'joi'

const updateNoteFeedbackSchema = joi.object({
    noteId: joi.number().integer().required(),
    feedback: joi.string().required()  
});

export default updateNoteFeedbackSchema;