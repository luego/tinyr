import { Controller, Get, Param } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { StatisticDto } from './dto/statistic.dto';
import { ShortLinkService } from 'src/short-link/short-link.service';

@Controller('statistic')
export class StatisticController {
  constructor(
    private readonly statisticService: StatisticService,
    private readonly shortLinkService: ShortLinkService,
  ) {}

  @Get(':slug')
  async getStatistic(@Param('slug') slug: string): Promise<StatisticDto[]> {
    const shortLink = await this.shortLinkService.findOne(slug);
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
