import Post from "../models/post";

export const getPosts = async (res, req) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error:error.message})
  }
}
export const getPost = async (res, req) => {
  try {
    const {  id  } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.json(post)
    }
    res.status(404).json({message: 'Post Not Found'})
  } catch (error){
    res.status(500).json( { error: error.message } )
  }
}

export const createPost = async (res, req) => {
  try {
    const post = newPost(req.body)
    await post.save()
    res.status(201).json(post)
    
  } catch (error){
    console.log(error)
    res.status(500).json({ error: error.message})
  }
}

export const updatePost = async (res, req) => {
 
    const { id } = req.params
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true} )
  res.status(200).json(post)

}
export const deletePost = async (res, req) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post Deleted')

    }
    throw new Error('Post not found!')
  } catch (error) {
    console.log(error.message)
    res.status( 500 ).json({error: error.message})
    }
  }