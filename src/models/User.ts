import {Table, Column, Model, DataType, Default, Unique,CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid'

@Table({
    tableName: 'users', // name of the table in the database
    timestamps: true
})
export class User extends Model<User> {
    @Default(uuidv4)
    @Column({
        primaryKey: true, 
        type: DataType.UUID
    })
    public id!: string;
  
    @Column
    public email!: string;
  
    @Column
    public password!: string;

    @CreatedAt
    public createdAt!: Date;

    @UpdatedAt
    public updatedAt!: Date
}
