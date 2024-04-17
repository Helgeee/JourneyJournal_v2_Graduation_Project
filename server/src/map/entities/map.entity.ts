import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Map {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    coordinate: string

    //Связи к координатам заметки 

    //Cвязь к коллекциям(Путешествия)
}
