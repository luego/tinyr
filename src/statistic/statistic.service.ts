import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StatisticService {
  constructor(private readonly database: PrismaService) {}

  async getStatistic(shortLinkId: number) {
    return await this.database.visit.groupBy({
      by: ['country', 'countryCode'],
      where: {
        shortLinkId,
      },
      _count: { id: true },
    });
  }
}
