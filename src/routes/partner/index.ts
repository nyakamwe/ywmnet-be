import { Router } from "express";
import { listPartners, addPartner, partnerDetails, updatePartner, removePartner } from '../../controllers/partner.controllers'
import { requireAuth } from '../../middlewares/authorization'
import upload from '../../config/multerConfig'

const partnerRouter = Router()

partnerRouter.get('/', listPartners)
partnerRouter.get('/:partnerId', partnerDetails)
partnerRouter.post('/create',requireAuth, upload.single('logo'), addPartner)
partnerRouter.patch('/:partnerId/update',requireAuth, upload.single('logo'), updatePartner)
partnerRouter.delete('/:partnerId/remove',requireAuth, removePartner)

export default partnerRouter
