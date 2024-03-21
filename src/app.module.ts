import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShortLinkModule } from './short-link/short-link.module';
import { ShortLinkService } from './short-link/short-link.service';
import { PrismaModule, PrismaService, loggingMiddleware } from 'nestjs-prisma';
import { VisitModule } from './visit/visit.module';
import { HttpModule } from '@nestjs/axios';
import { HelpersModule } from '@app/helpers';
import { VisitService } from './visit/visit.service';
import { StatisticModule } from './statistic/statistic.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          // configure your prisma middleware
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),

    ShortLinkModule,
    VisitModule,
    HttpModule,
    HelpersModule,
    StatisticModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [ShortLinkService, PrismaService, VisitService],
})
export class AppModule {}
