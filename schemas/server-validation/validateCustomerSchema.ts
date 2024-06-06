import * as Joi from "joi";

interface CustomerSchema {
    name: string;
    phone: string;
    isGold: boolean
}

const phoneRegex = /^\+?[1-9]\d{6,14}$/;

const customerSchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    phone: Joi.string().required().pattern(phoneRegex).message('Please enter a valid phone number'),
    isGold: Joi.boolean().required(),
    __v: Joi.optional()
})

export const validateCustomer = (object: CustomerSchema) => {
    return customerSchemaValidation.validate(object)
}