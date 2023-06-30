import { Router } from "express";
import { listPosts, addPost, updatePost, removePost, postDetails } from '../../controllers/post.controllers'
import { requireAuth } from '../../middlewares/authorization'
import upload from '../../config/multerConfig'

const postRouter = Router()

postRouter.get('/', listPosts)
postRouter.get('/:postId', postDetails)
postRouter.post('/create', upload.single('image'), addPost)
postRouter.patch('/:postId/update', upload.single('image'), updatePost)
postRouter.delete('/:postId/remove', removePost)

export default postRouter
