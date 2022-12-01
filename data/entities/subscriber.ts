import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Subscriber {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("text")
    nickname!: string

    @Column({type: "text", unique: true})
    email!: string
}