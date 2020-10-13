import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,10) //slice the first 10 array element.
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (   //if it has length, it return true, else return false.
      posts.map(post => { //if has length, cycle through the data using map()
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p> //body is a properties in the data table.
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home
