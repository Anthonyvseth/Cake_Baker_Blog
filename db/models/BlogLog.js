const { Schema } = require('mongoose')

module.exports = new  Schema (
    {
        Title: {
            type: String,
            required: true
        },
        description: {
            type: String
          },
          image_url: {
            type: String,
            required: true
          },
        user_id: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        },
        comments: [
          {
            type: Schema.Types.ObjectId,
            ref: 'comments'
          }
        ]
    }
)