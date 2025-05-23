import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';  // Movie 엔티티 import
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) { }

  create(movieData: CreateMovieDto): Promise<Movie> {
    const newMovie = this.movieRepository.create(movieData);
    return this.movieRepository.save(newMovie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findOneById(id: number): Promise<Movie | null> {
    return this.movieRepository.findOneBy({ id });
  }
}
