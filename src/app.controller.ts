import { Controller, Get, Param } from '@nestjs/common';
import { ShortLinkService } from './short-link/short-link.service';

@Controller()
export class AppController {
  constructor(private readonly shortLinkService: ShortLinkService) {}

  @Get()
  getHello(): string {
    return '404 Not found';
  }

  @Get(':slug')
  redirectShortLink(@Param('slug') slug: string): string {
    return this.shortLinkService.redirect(slug);
  }
}
