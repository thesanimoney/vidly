import Joi from "joi";

interface RentalSchema {
    name: string;
    phone: string;
    isGold: boolean
}

const rentalSchemaValidation = Joi.object({
    customerId: Joi.string().required(),
    courseId: Joi.string().required()
})

export const validateRentalSchema = (object: RentalSchema) => {
    return rentalSchemaValidation.validate(object)
}