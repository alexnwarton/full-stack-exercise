import { Link } from 'react-router-dom'


const Post = ({ _id, title, imgURL, review, publisher, key }) => {
  return (
    <Link to = {`/posts/${_id}`}>
      <div>
        <h2>{title}</h2>
        <img src={imgURL}/>
        <p>{review}</p>
        <h3>{publisher}</h3>
      </div>
    </Link>
  )
}

export default Post