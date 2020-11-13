const { model } = require('mongoose')

const UserSchema = require('./models/User')
const BlogLogSchema = require('./models/BlogLog')
const CommentSchema = require('./models/Comments')

const User = model('users', UserSchema)
const Comments = model('comments', CommentSchema)
const BlogLog = model('blog_log', BlogLogSchema)

module.exports = {
    User,
    Comments,
    BlogLog
}