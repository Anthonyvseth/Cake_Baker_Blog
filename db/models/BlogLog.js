const { Schema } = require('mongoose')

module.exports = new  Schema (
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
          },
          image_url: {
            type: String,
            required: false
          },
        ingredient: {
            type: Schema.Types.ObjectId,
            ref: 'ingredient'
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