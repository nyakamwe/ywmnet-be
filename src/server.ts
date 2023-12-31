import express, { Application, Request, Response } from 'express'
import routes from './routes'
import 'dotenv/config'
import { sequelize } from './sequelize'
import { USER_MODEL, POST_MODEL, PARTNER_MODEL, MESSAGE_MODEL } from './models'
import cors from 'cors'

const app: Application = express()
const port = process.env.PORT || 9001
const mode = process.env.NODE_ENV

// Body parsing Middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the ywmnet API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

app.use('/api/v1', routes)

const dbConnection = async()=>{
    try {
        // await sequelize.authenticate();
        await sequelize.addModels(USER_MODEL)
        await sequelize.addModels(POST_MODEL)
        await sequelize.addModels(PARTNER_MODEL)
        await sequelize.addModels(MESSAGE_MODEL)

        await sequelize.sync({ alter: true })
        console.log('Connection has been established successfully.');
        console.log('WITH MODE OF', mode);
        } 
        catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

dbConnection()

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
        console.log( `press CTRL+C to stop server` );
    })
} catch (error) {
    console.log(`Error occurred`)
}
