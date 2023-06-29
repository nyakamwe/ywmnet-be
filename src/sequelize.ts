import { Sequelize } from 'sequelize-typescript'
import { dbConfig } from './config/dbConfig'

export const sequelize = new Sequelize({
    'username': dbConfig.username,
    'password': dbConfig.password,
    'database': dbConfig.database,
    'host': dbConfig.host,
    'dialect': 'postgres'
});