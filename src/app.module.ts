import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShortLinkModule } from './short-link/short-link.module';
import { ShortLinkService } from './short-link/short-link.service';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { VisitModule } from './visit/visit.module';
import { HttpModule } from '@nestjs/axios';
import { HelpersModule } from '@app/helpers';
import { VisitService } from './visit/visit.service';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [
    PrismaModule,
    ShortLinkModule,
    VisitModule,
    HttpModule,
    HelpersModule,
    StatisticModule,
  ],
  controllers: [AppController],
  providers: [ShortLinkService, PrismaService, VisitService],
})
export class AppModule {}
