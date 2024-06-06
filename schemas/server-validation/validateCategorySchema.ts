import * as Joi from "joi";

interface CategorySchema {
    name: string;
    phone: string;
    isGold: boolean
}

const categorySchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    __v: Joi.optional()
})

export const validateCategory = (object: CategorySchema) => {
    return categorySchemaValidation.validate(object)
}