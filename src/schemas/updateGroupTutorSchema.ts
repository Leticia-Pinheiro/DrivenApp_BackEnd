import joi from "joi"

const updateGroupSchema = joi.object({
    tutorId: joi.number().integer().required(),	
    groupId: joi.number().integer().required()
});

export default updateGroupSchema;