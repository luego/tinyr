import { Injectable } from '@nestjs/common';
import { VisitDto } from './dto/visit.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class VisitService {
  constructor(private readonly database: PrismaService) {}

  async create(createVisitDto: VisitDto) {
    return this.database.visit.create({
      data: {
        shortLinkId: createVisitDto.shortLinkId,
        country: createVisitDto.country,
        countryCode: createVisitDto.countryCode,
      },
    });
  }
}
