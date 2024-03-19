import { IsNotEmpty } from 'class-validator';

export class FindOneShortLinkDto {
  @IsNotEmpty()
  slug: string;
}
