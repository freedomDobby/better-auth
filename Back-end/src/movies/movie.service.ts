import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Movie } from './movie.entity' // Movie 엔티티 import
import { CreateMovieDto } from './dto/create-movie.dto'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  create(movieData: CreateMovieDto): Promise<Movie> {
    const newMovie = this.movieRepository.create(movieData)
    return this.movieRepository.save(newMovie)
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find()
  }

  findOneById(id: number): Promise<Movie | null> {
    return this.movieRepository.findOneBy({ id })
  }

  async delete(movieId: number) {
    const movie = await this.movieRepository.delete({ id: movieId })
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${movieId} not found`)
    }
  }

  async update(updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const id = updateMovieDto.id
    // console.log('🌹 updateMovieDto.id: ', id)
    const movie = await this.movieRepository.findOne({ where: { id } })
    // console.log('🌹 movie: ', movie)
    if (!movie) {
      throw new NotFoundException(`Movie with ID not found`)
    }
    // console.log('🌹 updateMovieDto: ', updateMovieDto)
    Object.assign(movie, updateMovieDto)
    return this.movieRepository.save(movie)
  }
}
