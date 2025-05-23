import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { MoviesController } from './movie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],  // 엔티티 등록 중요!
  providers: [MovieService],
  controllers: [MoviesController],
})
export class MovieModule { }
