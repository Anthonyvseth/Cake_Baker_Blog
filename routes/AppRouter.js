
const Router = require('express').Router()

const UserRouter = require('./UserRoute')
const CommentRouter = require('./CommentRoute')
const BlogLogRouter = require('./BlogLogRoute')

Router.use('/users', UserRouter)
Router.use('/posts', BlogLogRouter)
Router.use('/comments', CommentRouter)

module.exports = Router