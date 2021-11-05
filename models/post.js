import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    review: { type: String, required: true },
    publisher: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post)