import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShortLinkModule } from './short-link/short-link.module';
import { ShortLinkService } from './short-link/short-link.service';
import { PrismaModule, PrismaService } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule, ShortLinkModule],
  controllers: [AppController],
  providers: [ShortLinkService, PrismaService],
})
export class AppModule {}
