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