import {Table, Column, Model, DataType, Default, Unique,CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid'

@Table({
    tableName: 'posts',
    timestamps: true
})
export class Post extends Model<Post> {
    @Default(uuidv4)
    @Column({
        primaryKey: true, 
        type: DataType.UUID
    })
    public id!: string;
  
    @Column
    public title!: string;

    @Column
    public description!: string;
  
    @Column
    public image!: string;

    @CreatedAt
    public createdAt!: Date;

    @UpdatedAt
    public updatedAt!: Date
}
