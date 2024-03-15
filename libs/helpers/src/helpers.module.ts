import { Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [HelpersService],
  exports: [HelpersService],
})
export class HelpersModule {}
