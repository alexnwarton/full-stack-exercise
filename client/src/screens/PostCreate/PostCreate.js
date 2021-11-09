import Layout from '../../components/Layout/Layout.jsx'
import { createPost } from '../../services/posts.js'
import { useEffect, useState } from 'react'
const PostCreate = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    review: '',
    imgURL: '',
    publisher: ''
})
const handleChange = (event) => {
  const { name, value  } = event.target
  setNewPost({
          ...newPost,
          [name]: value,
          
  })
}
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(newPost)
    console.log('button clicked!')
    alert('Your Blog has been  created!')
    setNewPost({
      title: '',
      review: '',
      imgURL: '',
      publisher: ''
  })
  }
  // useEffect(() => {
  //   const createPost = async () => {
  //     const createdPost = await createPost()
      
  //     console.log(createdPost)
      
  //   }
  //   createPost();
  // }, [])
  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
        <input placeholder="Title"
          value={newPost.title}
            name="title"
            onChange={handleChange}
          />
        <input placeholder="Img Link"
          value={newPost.imgURL}
            name="imgURL"
            onChange={handleChange}
            
          />
          
        <textarea 
          className="textarea-post-review"
          placeholder="Review"
          value={newPost.review}
          name="review"
          onChange={handleChange}
          />
          <input 
          className="input-post-publisher"
          placeholder="Publisher"
          value={newPost.publisher}
          name="publisher"
          onChange={handleChange}
          />
          <button type="submit" className="update-button">Create Post</button>
        </form>
      </div>
      </Layout>
	)
}

export default PostCreate