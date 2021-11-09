import { useState, useEffect } from 'react';
import './PostEdit.css';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx'
import { getPost, updatePost } from '../../services/posts';

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    review: "",
    publisher: ""
  })

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    }
    fetchPost();
  }, [id])

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const updatedPost = await updatePost(id, post);
    setUpdated(updatedPost);
  }

  if(isUpdated) {
    return <Navigate to={`/posts/${id}`} />
  }

  return (
    <Layout>
		  <div className="post-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <input 
          className="input-post-title"
          placeholder="Title"
          value={post.title}
          name="title"
          onChange={handleChange}
          />
          <input 
          className="input-post-image"
          placeholder="Image Link"
          value={post.imgURL}
          name="image"
          onChange={handleChange}
          />
          <textarea 
          className="textarea-post-review"
          placeholder="Review"
          value={post.review}
          name="review"
          onChange={handleChange}
          />
          <input 
          className="input-post-publisher"
          placeholder="Publisher"
          value={post.publisher}
          name="publisher"
          onChange={handleChange}
          />
          <button type="submit" className="update-button">Update Post</button>
        </form>
      </div>
    </Layout>
	)
}

export default PostEdit