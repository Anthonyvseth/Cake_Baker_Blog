
const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/blog_log', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.connect(
  process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : 'blog_log'
)

mongoose.set('debug', true)

module.exports = connection