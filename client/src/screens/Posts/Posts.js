import Layout from '../../components/Layout/Layout.jsx'
import { useState, useEffect } from 'react'
import { getPosts } from '../../services/posts.js'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      console.log(posts)
      console.log(allPosts)
    }
    fetchPosts();
  }, [])
  

  return (
    <Layout>
		  <div>
			  <h1>Test Posts.js</h1>
      </div>
      {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className='posts'>
        {searchResult.map((post, index) => {
          return (
            <Product
              _id={post._id}
              title={post.title}
              imgURL={post.imgURL}
              publisher={post.publisher}
              key={index}
            />
          )
        })}
      </div> */}
    </Layout>
	)
}

export default Posts