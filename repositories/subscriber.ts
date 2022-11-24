import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Subscriber {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("text")
    name!: string

    @Column("text")
    email!: string
}