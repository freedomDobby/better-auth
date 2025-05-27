import { IsOptional, IsString, IsDateString, IsNumber } from 'class-validator'

export class UpdateMovieDto {
  @IsNumber()
  id: number

  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsString()
  director?: string

  @IsOptional()
  @IsString()
  genre?: string

  @IsOptional()
  @IsDateString()
  releaseDate?: string
}
