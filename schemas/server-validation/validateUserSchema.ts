import * as Joi from "joi";

interface UserSchema {
    name: string;
    email: string;
    password: string
}

const userSchemaValidation = Joi.object({
    name: Joi.string().required().min(3).max(255),
    password: Joi.string().required().min(8),
    email: Joi.string().required().email()
})

export const validateUserSchema = (object: UserSchema) => {
    return userSchemaValidation.validate(object)
}