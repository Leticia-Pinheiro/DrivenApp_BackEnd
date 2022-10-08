import joi from 'joi'

const noteSchema = joi.object({
    note: joi.string().valid('abaixo', 'dentro', 'acima').required(),
    feedback: joi.string().required(),
    studentId: joi.number().integer().required(),
    projectId: joi.number().integer().required(),
});

export default noteSchema