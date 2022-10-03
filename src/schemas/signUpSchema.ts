import joi from "joi"

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
	password: joi.string().min(8).required(),
    confirmedPassword: joi.string().min(8).required(),
    type: joi.string().valid('company', 'teacher', 'tutor', 'student').required()
});

export default signUpSchema;