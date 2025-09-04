import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
//user entity
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    email: string;
    
    @Column()
    password: string;
}