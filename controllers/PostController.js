const { BlogLog, User, Comment } = require('../db/Schema')

const GetPosts = async (req, res) => {
  const { page, limit } = req.query
  const offset = page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
  const posts = await BlogLog.find()
    .limit(parseInt(limit))
    .skip(offset)
    .sort({ title: 'desc' })
  res.send(posts)
}

const GetPostById = async (req, res) => {
  const post = await BlogLog.findById(req.params.post_id).populate([
    {
      model: 'users',
      path: 'user_id',
      select: '_id name'
    },
    {
      path: 'comments',
      populate: {
        path: 'user_id',
        model: 'users',
        select: '_id name'
      }
    }
  ])
  res.send(post)
}

const CreatePost = async (req, res) => {
  const newPost = new BlogLog({ ...req.body, user_id: req.params.user_id })
  newPost.save()
  res.send(newPost)
}

const DeletePost = async (req, res) => {
  try {
  // await Comment.deleteMany({ _id: { $in: post.comments } })
  await BlogLog.findByIdAndDelete(req.params.post_id)
  res.send({ msg: 'Post deleted' })
  } catch(error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
  await BlogLog.findByIdAndUpdate(
    req.params.post_id,
    {
      ...req.body
    },
    { new: true, useFindAndModify: false },
    // (err, (d) => (err ? err : res.send(d)))
  )
  } catch(error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostById,
  CreatePost,
  DeletePost,
  UpdatePost
}