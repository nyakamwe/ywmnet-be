import {Table, Column, Model, DataType, Default, Unique,CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid'

@Table({
    tableName: 'messages',
    timestamps: true
})
export class Message extends Model<Message> {
    @Default(uuidv4)
    @Column({
        primaryKey: true,
        type: DataType.UUID
    })
    public id!: string;
  
    @Column
    public firstName!: string;

    @Column
    public lastName!: string;

    @Column
    public message!: string;

    @Column
    public email!: string;
  
    @Column
    public phoneNumber!: string;

    @CreatedAt
    public createdAt!: Date;

    @UpdatedAt
    public updatedAt!: Date
}
