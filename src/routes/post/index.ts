import { Router } from "express";
import { listPosts, addPost, updatePost, removePost, postDetails } from '../../controllers/post.controllers'
import { requireAuth } from '../../middlewares/authorization'
import upload from '../../config/multerConfig'

const postRouter = Router()

postRouter.get('/', listPosts)
postRouter.get('/:postId', postDetails)
postRouter.post('/create', requireAuth, upload.single('image'), addPost)
postRouter.patch('/:postId/update', requireAuth, upload.single('image'), updatePost)
postRouter.delete('/:postId/remove', requireAuth, removePost)

export default postRouter
