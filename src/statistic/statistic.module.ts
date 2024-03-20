import { Module } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { StatisticController } from './statistic.controller';
import { ShortLinkService } from 'src/short-link/short-link.service';

@Module({
  providers: [StatisticService, ShortLinkService],
  controllers: [StatisticController],
})
export class StatisticModule {}
