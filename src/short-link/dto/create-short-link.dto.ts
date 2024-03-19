import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateShortLinkDto {
  @IsNotEmpty()
  @IsUrl({ require_protocol: true })
  url: string;
}
