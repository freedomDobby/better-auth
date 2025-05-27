import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common'
import { CreateMovieDto } from './dto/create-movie.dto'
import { MovieService } from './movie.service'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAll() {
    return this.movieService.findAll()
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.movieService.findOneById(id)
  }

  @Post('registerMovie')
  create(@Body() createMovieDto: CreateMovieDto) {
    console.log('🎞 movieData', createMovieDto)
    return this.movieService.create(createMovieDto)
  }

  @Delete('deleteMovie')
  remove(@Body('movieId') movieId: number) {
    console.log('🌹 movieId: ', movieId)
    return this.movieService.delete(movieId)
  }

  @Patch('updateMovie')
  update(@Body('updateInfo') updateMovieDto: UpdateMovieDto) {
    console.log('🌹 updateInfo: ', updateMovieDto)
    return this.movieService.update(updateMovieDto)
  }
}
