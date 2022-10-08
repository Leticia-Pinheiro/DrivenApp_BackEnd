import joi from 'joi'

const updateModuleName = joi.object({
    moduleId: joi.number().integer().required(),	
    name: joi.string().required()   
    
});

export default updateModuleName;