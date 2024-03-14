import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { ShortLinkService } from './short-link/short-link.service';

@Controller()
export class AppController {
  constructor(private readonly shortLinkService: ShortLinkService) {}

  @Get()
  getHello(): string {
    return '404 Not found';
  }

  @Get(':slug')
  async redirectShortLink(@Param('slug') slug: string) {
    const shortLink = await this.shortLinkService.findOne(slug);
    Redirect(shortLink.url);
  }
}
