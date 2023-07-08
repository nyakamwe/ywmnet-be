import {Table, Column, Model, DataType, Default, Unique,CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid'

@Table({
    tableName: 'partners',
    timestamps: true
})
export class Partner extends Model{
    @Default(uuidv4)
    @Column({
        primaryKey: true, 
        type: DataType.UUID
    })
    public id!: string;
  
    @Column
    public name!: string;

    @Column
    public logo!: string;
  
    @CreatedAt
    public createdAt!: Date;

    @UpdatedAt
    public updatedAt!: Date
}
