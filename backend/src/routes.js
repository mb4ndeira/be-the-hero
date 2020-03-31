const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const ongs = require('./controllers/ongs')
const incidents = require('./controllers/incidents')
const profile = require('./controllers/profile')
const session = require('./controllers/session')

const routes = express.Router()

// ongs

routes.get('/ongs', ongs.index)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })
}), ongs.create)

// incidents

routes.post('/incidents', incidents.create)
routes.get('/incidents', incidents.index)
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidents.delete)

// profile

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profile.index)

// session

routes.post('/sessions', session.create)

module.exports = routes 