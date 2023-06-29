import express, { Application, Request, Response } from 'express'
import routes from './routes'
import 'dotenv/config'
import { sequelize } from './sequelize'

const app: Application = express()
const port = process.env.PORT || 9001

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the ywmnet API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

app.use('/api/v1', routes)

const dbConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
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