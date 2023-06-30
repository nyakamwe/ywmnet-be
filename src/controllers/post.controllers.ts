import { Request, Response } from 'express'
import { Post } from '../models/Post'
import cloudinary from '../config/cloudinaryConfig'
import upload from '../config/multerConfig'

export async function listPosts(req: Request, res: Response){
    const posts = await Post.findAll()
    return res.status(200).json({
        response: posts
    })
}


export async function addPost(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const file = req.file;
    
    if (file) {
      // Upload to Cloudinary
      const result = await cloudinary.v2.uploader.upload(file.path);
      const imageUrl = result.secure_url;

      // Create a post
      const newPost = await Post.create({
        title: title,
        description: description,
        image: imageUrl,
      });

      return res.status(201).json({
        response: newPost,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
}

export async function postDetails(req: Request, res: Response){
    const { postId } = req.params
    //check post
    const response = await Post.findByPk(postId)
    return res.status(200).json({
        response
    })
}

export async function updatePost(req: Request, res: Response) {
    try {
      const { title, description } = req.body;
      const file = req.file;
      const { postId } = req.params

      //check post
      const response = await Post.findByPk(postId)

      if(!response){
        return res.status(404).json({
            error: "Post does not exists!"
        })
      }
  
      if(!file){
        if(title || description){
            // Update a Post
            await response.update({
                title: title || response.title,
                description: description || response.description,
                image: response.image,
            })

            return res.status(200).json({
                response: response,
            });
        }
      }
      if (file) {

        // Upload to Cloudinary
        const result = await cloudinary.v2.uploader.upload(file.path);
        const imageUrl = result.secure_url;
  
        // Update a Post
        await response.update({
            title: title || response.title,
            description: description || response.description,
            image: imageUrl || response.image,
        })
        
        return res.status(200).json({
          response: response,
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        error: error.message
      });
    }
}

export async function removePost(req: Request, res: Response) {
    try {
      const { postId } = req.params

      //check post
      const response = await Post.findByPk(postId)
      if(!response){
        return res.status(404).json({
            error: "Post does not exists!"
        })
      }

      // remove a Post
      await response.destroy()

      return res.status(204).json({
        message: 'Post deleted successfully',
      });
    } catch (error) {
      return res.status(500).json({
        error,
      });
    }
}
