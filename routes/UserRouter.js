const Router = require('express').Router()
const { Module } = require('module')
const UserController = require('../controllers/UserController')
const { get } = require('../db/models/User')
const {
    getToken,
    createToken,
    verifyToken
} = require('../middleware/JwtHandler')

Router.get('/:user_id', UserController.getProfile)
Router.post('/register', UserController.CreatUser)
Router.post('/login', UserController.SignIn, createToken)
Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
)

module.exports = Router