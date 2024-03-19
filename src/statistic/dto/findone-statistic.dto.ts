import { IsNotEmpty, Min } from 'class-validator';

export class FindOneStatisticsDto {
  @IsNotEmpty()
  @Min(6)
  slug: string;
}
