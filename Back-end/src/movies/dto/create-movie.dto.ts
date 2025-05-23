import { IsString, IsDateString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  director: string;

  @IsString()
  genre: string;

  @IsDateString()
  release_date: string;
}
