import { Module } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { StatisticController } from './statistic.controller';
import { PrismaModule } from 'nestjs-prisma';
import { ShortLinkService } from 'src/short-link/short-link.service';

@Module({
  providers: [StatisticService, ShortLinkService],
  controllers: [StatisticController],
  imports: [PrismaModule],
})
export class StatisticModule {}
