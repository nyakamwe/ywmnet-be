import {Table, Column, Model, DataType, Default,CreatedAt, UpdatedAt, Sequelize } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid'

interface IMessage {
    id: string;
    firstName: string;
    lastName: string;
    message: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
    tableName: 'messages',
    timestamps: true
})

export class Message extends Model{
    @Default(uuidv4)
    @Column({
        primaryKey: true,
        type: DataType.UUID
    })
    id!: string;
  
    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column
    message!: string;

    @Column
    email!: string;
  
    @Column
    phoneNumber!: string;

    @CreatedAt
    @Default(DataType.NOW)
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Default(DataType.NOW)
    @Column
    updatedAt!: Date
}
