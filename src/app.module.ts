import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShortLinkModule } from './short-link/short-link.module';
import { ShortLinkService } from './short-link/short-link.service';

@Module({
  imports: [ShortLinkModule],
  controllers: [AppController],
  providers: [ShortLinkService],
})
export class AppModule {}
