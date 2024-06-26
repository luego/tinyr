import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { StatisticDto } from './dto/statistic.dto';
import { ShortLinkService } from 'src/short-link/short-link.service';
import { FindOneStatisticsDto } from './dto/findone-statistic.dto';

@Controller('url-stats')
export class StatisticController {
  constructor(
    private readonly statisticService: StatisticService,
    private readonly shortLinkService: ShortLinkService,
  ) {}

  @Get('/fetch/:slug')
  async getStatistic(
    @Param() params: FindOneStatisticsDto,
  ): Promise<StatisticDto[]> {
    const shortLink = await this.shortLinkService.findOne(params.slug);
    if (shortLink == null) {
      throw new HttpException('ShortLink not found', HttpStatus.BAD_REQUEST);
    }
    const visits = await this.statisticService.getStatistic(shortLink.id);
    const visitReponse: StatisticDto[] = [];
    visits.map((visit) =>
      visitReponse.push({
        count: visit._count.id,
        country: visit.country,
        countryCode: visit.countryCode,
      }),
    );
    return visitReponse;
  }
}
