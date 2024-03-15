import { Controller, Get, Ip, Param, Redirect } from '@nestjs/common';
import { ShortLinkService } from './short-link/short-link.service';
import { HelpersService } from '@app/helpers';
import { VisitService } from './visit/visit.service';
import { VisitDto } from './visit/dto/visit.dto';

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
  async redirectShortLink(@Param('slug') slug: string, @Ip() ip: string) {
    const shortLink = await this.shortLinkService.findOne(slug);
    const ipResponse = await this.helpers.find(ip);
    const visit: VisitDto = {
      shortLinkId: shortLink.id,
      country: ipResponse.country,
      countryCode: ipResponse.countryCode,
    };
    console.log(ipResponse);

    this.visitService.create(visit);

    return { url: shortLink.url };
  }
}
