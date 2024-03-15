import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  providers: [VisitService],
  imports: [PrismaModule],
})
export class VisitModule {}
