const Joi = require("joi");

const createProductSchema = Joi.object({
    title: Joi.string().required(),
    ingredients: Joi.string().optional(),
    price: Joi.string().required()
});

const updateProductSchema = createProductSchema;

module.exports = {
    createProductSchema,
    updateProductSchema
}