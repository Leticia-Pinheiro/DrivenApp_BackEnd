import joi from 'joi'

const updateNoteSchema = joi.object({
    noteId: joi.number().integer().required(),
    note: joi.string().valid('abaixo', 'dentro', 'acima').required()      
});

export default updateNoteSchema;