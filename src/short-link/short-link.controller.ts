import { Body, Controller, Post } from '@nestjs/common';
import { CreateShortLinkDto } from './dto/CreateShortLink.dto';

@Controller('shortlinks')
export class ShortLinkController {
  @Post()
  create(@Body() createShortLinkDto: CreateShortLinkDto) {}
}
