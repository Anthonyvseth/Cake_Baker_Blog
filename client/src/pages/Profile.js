import React, { Component } from 'react'
import Card from '../components/Card'
import { __DeletePost } from '../components/services/PostServices'
import { __GetProfile } from '../components/services/UserServices'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'
// import Hero from './Hero'
// import ViewPost from './ViewPost'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      postFetchError: false,
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      console.log(this.props)
      const profileData = await __GetProfile(this.props.currentUser._id)
      this.setState({ posts: profileData.posts })
      console.log(profileData)
    } catch (error) {
      this.setState({ postFetchError: true })
    }
  }

  deletePost = async (id) => {
    try {
      const postsToKeep = this.state.posts.filter((post) => post._id !== id)
      this.setState({ posts: postsToKeep })
      await __DeletePost(id)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="profile">
      <CreatePost {...this.props} currentUser={this.props.currentUser}/>
        <div>
          {this.state.posts.length ? (
            <div className="post-content wrapper flex-row">
              {this.state.posts.map((post) => (
                <div key={post._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/posts/${post._id}`)
                    }
                  >
                    <div className="mask flex-col">
                      <div className="card-content">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                      </div>
                    </div>
                    <img src={post.image_url} alt="sf" />
                  </Card>
                  <div className="flex-row button-wrapper">
                    <button {...this.props} currentPost={this.props.currentPost} className={UpdatePost} onClick={() =>this.props.history.push(`/edit/${post._id}`)}>
                      Edit
                    </button>
                    <button onClick={() => this.deletePost(post._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No Posts</div>
          )}
        </div>
      </div>
    )
  }
}
