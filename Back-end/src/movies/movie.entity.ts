import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  genre: string;

  @Column({ type: 'date' })
  release_date: string;
}
