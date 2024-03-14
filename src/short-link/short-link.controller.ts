import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ShortLinkService } from './short-link.service';

@Controller('shortlinks')
export class ShortLinkController {
  constructor(private readonly shortLinkService: ShortLinkService) {}
  @Post()
  create(@Body() createShortLinkDto: Prisma.ShortLinkCreateInput) {
    return this.shortLinkService.create(createShortLinkDto);
  }
}
