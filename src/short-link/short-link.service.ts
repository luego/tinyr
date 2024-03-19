import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import ShortUniqueId from 'short-unique-id';
import { CreateShortLinkDto } from './dto/create-short-link.dto';

@Injectable()
export class ShortLinkService {
  constructor(private readonly database: PrismaService) {}

  async create({ url }: CreateShortLinkDto) {
    const uid = new ShortUniqueId({ length: 6 });
    const slug = uid.rnd();
    return this.database.shortLink.create({
      data: {
        url,
        slug,
      },
    });
  }

  async findOne(slug: string) {
    return this.database.shortLink.findUnique({
      where: {
        slug,
      },
    });
  }
}
