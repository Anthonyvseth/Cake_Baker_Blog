import React, { Component } from 'react'
import TextInput from './TextInput'
import { __uploadComment } from './services/CommentServices'

export default class CreateComment extends Component {
    constructor() {
        super() 
        this.state = {
            comment: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
      }
    
      handleSubmit = async (e,postId) => {
        e.preventDefault()
        try {
          await __uploadComment(this.state, this.props.currentUser._id)
          this.props.history.push(`/comments/${postId}`)
        } catch (error) {
          console.log(error)
        }
      }

      render() {
          const { comment } = this.state
          return (
              <div className="upload content">
                  <form className="flex-col" onSubmit={this.handleSubmit}>
                      <TextInput
                      placeholder="Comment"
                      name="comment"
                      value={comment}
                      onChange={this.handleChange}
                      />
                      <button>Comment</button>
                  </form>
              </div>
          )
      }

}
