import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class ShortLinkService {
  constructor(private readonly database: PrismaService) {}

  async create(createShortLinkDto: Prisma.ShortLinkCreateInput) {
    const uid = new ShortUniqueId({ length: 10 });
    createShortLinkDto.slug = uid.rnd();

    return this.database.shortLink.create({ data: createShortLinkDto });
  }

  async findOne(slug: string) {
    return this.database.shortLink.findUnique({
      where: {
        slug,
      },
    });
  }
}
