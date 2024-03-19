import { IsNotEmpty } from 'class-validator';

export class FindOneStatisticsDto {
  @IsNotEmpty()
  slug: string;
}
