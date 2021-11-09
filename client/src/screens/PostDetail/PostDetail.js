// import PostDetails from 'client/src/screens/PostDetail/PostDetail.css'
import Layout from '../../components/Layout/Layout.jsx'
import { getPost } from '../../services/posts.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const PostDetail = () => {
  const [fetchedPost, setFetchedPost] = useState([])
  const { id } = useParams()
  useEffect(()  => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setFetchedPost(post)
    }
    fetchPost();
    console.log(fetchedPost)
},[id])

  return (
    <Layout>
		<div>
      
      <div className='container'>

          <h1 >{fetchedPost.title}</h1>
          <section>
          <p >{fetchedPost.review}</p>

          <h5 >{fetchedPost.publisher}</h5>
          </section>
   
      </div>
      </div>
    </Layout>
	)
}

export default PostDetail