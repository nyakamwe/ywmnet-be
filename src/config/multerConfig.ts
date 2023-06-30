import multer from 'multer'
import path from 'path'

//storage engine
const storage = multer.diskStorage({
    destination:'src/uploads/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//upload image
const upload = multer({
	storage:storage
})
   
export default upload
