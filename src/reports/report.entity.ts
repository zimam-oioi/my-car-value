import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
// report entity
@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    price: number;

    @Column()
    value: number;

}