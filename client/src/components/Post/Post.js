const Post = ({ _id, title, imgURL, review, publisher, key }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{review}</p>
      <h3>{publisher}</h3>
    </div>
  )
}

export default Post