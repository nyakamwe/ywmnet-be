import { Request, Response } from 'express'
import { Message } from '../models/Message'

export async function listMessages(req: Request, res: Response){
    const messages = await Message.findAll()
    return res.status(200).json({
        response: messages
    })
}

export async function sendMessage(req: Request, res: Response): Promise<Response>{
    const { 
        firstName,
        lastName,
        email,
        message,
        phoneNumber
    } = req.body

    if(!firstName || !lastName || !email || !message || !phoneNumber){
        return res.status(400).json({
            error: 'All are needed!'
        })
    }
    const newMessage = await Message.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        phoneNumber: phoneNumber,
    })

    return res.status(201).json({
      response: newMessage,
    })
}
