import { Controller, Get, Param, Post, Delete, Patch, Body } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  getAll() {
    return this.movieService.findAll()
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return this.movieService.findOneById(id);
  }

  @Post('registerMovie')
  create(@Body() createMovieDto: CreateMovieDto) {
    console.log("🎞 movieData", createMovieDto);
    return this.movieService.create(createMovieDto);
  }


  @Delete("/:id")
  remove(@Param('id ') movieId: string) {
    return `This will delete a movie : ${movieId}`
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This will patch : ${movieId}`
  }
}
