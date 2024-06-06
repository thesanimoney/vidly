import Joi from "joi";

interface UserSchema {
    email: string;
    password: string
}

const userLoginValidation = Joi.object({
    password: Joi.string().required().min(6).max(1024),
    email: Joi.string().required().email()
})

export const validateUserLogin = (object: UserSchema) => {
    return userLoginValidation.validate(object)
}