import { IsNotEmpty, Min } from 'class-validator';

export class FindOneShortLinkDto {
  @IsNotEmpty()
  @Min(6)
  slug: string;
}
