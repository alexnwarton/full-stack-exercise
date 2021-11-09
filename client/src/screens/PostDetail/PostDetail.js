// import PostDetails from 'client/src/screens/PostDetail/PostDetail.css'
import Layout from '../../components/Layout/Layout.jsx'
import { getPost, deletePost } from '../../services/posts.js'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const PostDetail = (props) => {
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
        <div className="button-container">
        <button className="edit-button"><Link className="edit-link" to={`/posts/${fetchedPost._id}/edit`}>Edit</Link></button>
        {/*CHANGE THIS TO THE DELETE FUNCTION AFTER WE GET THIS WORKING*/}
        <button className="delete-button" onClick={() => console.log(fetchedPost._id)}>Delete</button>
        </div>
      </div>
    </Layout>
	)
}

export default PostDetail