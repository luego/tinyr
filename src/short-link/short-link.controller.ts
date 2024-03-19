import { Body, Controller, Post } from '@nestjs/common';
import { ShortLinkService } from './short-link.service';
import { CreateShortLinkDto } from './dto/create-short-link.dto';
import { ResultShortLinkDto } from './dto/result-short-Link.dto';
import { ConfigService } from '@nestjs/config';

@Controller('shortlinks')
export class ShortLinkController {
  constructor(
    private readonly shortLinkService: ShortLinkService,
    private readonly configs: ConfigService,
  ) {}
  @Post()
  async create(@Body() createShortLinkDto: CreateShortLinkDto) {
    const shortLink = await this.shortLinkService.create(createShortLinkDto);
    const resultDto: ResultShortLinkDto = {
      result: `${this.configs.getOrThrow<string>('SHORT_LINK_DOMAIN')}/${shortLink.slug}`,
    };
    return resultDto;
  }
}
