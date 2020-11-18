const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/blog_log', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.set('debug', true)
mongoose.connection(
    process.env.NODE_ENV === 'production'
      ? process.env.DATABASE_URL
      : '<Your local db connection>'
  )

module.exports = connection