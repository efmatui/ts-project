import Joi from 'joi';

export const schemaIndex = Joi.object({
  name: Joi.string().required()
})