import Joi from "joi";

interface Course {
    name: string;
    author: string;
    tags: string[];
    description: string;
    isPublished: boolean;
    price?: number; // price is optional because it is conditionally required
}

const courseSchemaValidation = Joi.object({
    _id: Joi.optional(),
    __v: Joi.optional(),
    name: Joi.string().min(3).max(255).required(),
    tags: Joi.array<string[]>().min(1).max(255).required(),
    description: Joi.string().min(3).max(255).required(),
    isPublished: Joi.boolean().required(),
    price: Joi.number().when('isPublished', {
        is: true,
        then: Joi.required(),
        otherwise: Joi.optional()
    }),
    category: {
        _id: Joi.string().hex().length(24),
        name: Joi.string().min(3).max(255)
    },
    numberInStock: Joi.number().required(),
    dailyRent: Joi.number().required(),
})

const validateCourse = (object: Course) => {
   return courseSchemaValidation.validate(object)
}

export default validateCourse;