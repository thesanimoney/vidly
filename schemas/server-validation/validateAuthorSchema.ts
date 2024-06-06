import * as Joi from "joi";

interface AuthorSchema {
    name: string;
    phone: string;
    isGold: boolean
}

const authorSchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    age: Joi.number().required().min(1).max(130),
    __v: Joi.optional()
})

export const validateAuthor = (object: AuthorSchema) => {
    return authorSchemaValidation.validate(object)
}