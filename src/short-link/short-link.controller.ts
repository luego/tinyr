import { Body, Controller, Post } from '@nestjs/common';
import { ShortLinkService } from './short-link.service';
import { CreateShortLinkDto } from './dto/create-short-link.dto';

@Controller('shortlinks')
export class ShortLinkController {
  constructor(private readonly shortLinkService: ShortLinkService) {}
  @Post()
  create(@Body() createShortLinkDto: CreateShortLinkDto) {
    return this.shortLinkService.create(createShortLinkDto);
  }
}
