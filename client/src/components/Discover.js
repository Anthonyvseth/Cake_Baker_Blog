import React, { Component } from 'react'
import Card from '../components/Card'
import { __GetPosts } from '../components/services/PostServices'
import '../style/Discover.css'


export default class Discover extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      currentPage: 1
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const posts = await __GetPosts(this.state.currentPage)
      console.log(posts)
      this.setState({ posts: [...this.state.posts, ...posts] })
    } catch (error) {
      console.log(error)
    }
  }

  incrementPage = () => {
    try {
    this.setState(
      (prevState) => ({ currentPage: prevState.currentPage + 1 }),
      () => this.getPosts()
    )
    } catch (error) {
      throw error
    }
  }

  render() {
    const { posts } = this.state
    return (
      <div className="discover wrapper">
        <h2>Popular Posts</h2>
        <section className="content-wrapper">
          {posts.length ? (
            posts.map((post) => (
              <Card
                key={post._id}
                onClick={() => this.props.history.push(`/posts/${post._id}`)}
              >
                <div className="mask flex-col discover">
                  <div className="flex-col">
                    <div className="card-content">
                      <h3>{post.title}</h3>
                      <p>{post.description.substring(0, 50)}...</p>
                    </div>
                    <div className="card-content-top flex-row">
                      <div className="stats">
                        <p>Comments</p>
                        <p>{post.comments.length}</p>
                      </div>
                      <div className="stats">
                        <p>Likes</p>
                        <p>{post.popularity_rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={post.image_url} alt="sf" />
                
              </Card>
              
            ))
          ) : (
            <h3>No Posts</h3>
          )}
          <button onClick={this.incrementPage}>Load More</button>
        </section>
      </div>
    )
  }
}
