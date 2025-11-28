const Joi = require("joi");

const createPizzaSchema = Joi.object({
    title: Joi.string().required(),
    ingredients: Joi.string().optional(),
    price: Joi.string().required()
});

const updatePizzaSchema = createProductSchema;

module.exports = {
    createPizzaSchema,
    updatePizzaSchema
}