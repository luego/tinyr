import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Redirect,
} from '@nestjs/common';
import { ShortLinkService } from './short-link/short-link.service';
import { HelpersService } from '@app/helpers';
import { VisitService } from './visit/visit.service';
import { VisitDto } from './visit/dto/visit.dto';
import { FindOneShortLinkDto } from './short-link/dto/findone-short-link.dto';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(
    private readonly shortLinkService: ShortLinkService,
    private readonly helpers: HelpersService,
    private readonly visitService: VisitService,
  ) {}

  @Get()
  getHello(): string {
    return '404 Not found';
  }

  @Get(':slug')
  @Redirect('null', 302)
  async redirectShortLink(
    @Param() params: FindOneShortLinkDto,
    @RealIP() ip: string,
  ) {
    const shortLink = await this.shortLinkService.findOne(params.slug);
    if (shortLink == null) {
      throw new HttpException('ShortLink not found', HttpStatus.BAD_REQUEST);
    }
    const ipResponse = await this.helpers.find(ip);
    const visit: VisitDto = {
      shortLinkId: shortLink.id,
      country: ipResponse.country ?? 'unknown',
      countryCode: ipResponse.countryCode ?? 'unknown',
    };

    this.visitService.create(visit);

    return { url: shortLink.url };
  }
}
