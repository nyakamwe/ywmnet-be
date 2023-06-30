import { Request, Response } from 'express'
import { Partner } from '../models/Partner'
import cloudinary from '../config/cloudinaryConfig'
import upload from '../config/multerConfig'

export async function listPartners(req: Request, res: Response){
    const partners = await Partner.findAll()
    return res.status(200).json({
        response: partners
    })
}


export async function addPartner(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const file = req.file;

    if(!file || !name){
        return res.status(400).json({
            error: 'both name and logo are required!'
        })
    }

    // Upload to Cloudinary
    const result = await cloudinary.v2.uploader.upload(file.path);
    const imageUrl = result.secure_url;

    // Create a post
    const newPartner = await Partner.create({
      name,
      logo: imageUrl,
    });

    return res.status(201).json({
      response: newPartner,
    });

  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
}

export async function partnerDetails(req: Request, res: Response){
    const { partnerId } = req.params
    //check post
    const response = await Partner.findByPk(partnerId)
    return res.status(200).json({
        response
    })
}

export async function updatePartner(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const file = req.file;
      const { partnerId } = req.params

      //check post
      const response = await Partner.findByPk(partnerId)

      if(!response){
        return res.status(404).json({
            error: "Partner does not exists!"
        })
      }
  
      if(!file){
        if(name){
            // Update a Post
            await response.update({
                name: name,
                logo: response.logo,
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
            name: name || response.name,
            logo: imageUrl || response.logo,
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

export async function removePartner(req: Request, res: Response) {
    try {
      const { partnerId } = req.params

      //check post
      const response = await Partner.findByPk(partnerId)
      if(!response){
        return res.status(404).json({
            error: "Partner does not exists!"
        })
      }

      // remove a Post
      await response.destroy()

      return res.status(204).json({
        message: 'Partner deleted successfully',
      });
    } catch (error) {
      return res.status(500).json({
        error,
      });
    }
}
