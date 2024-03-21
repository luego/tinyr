import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get('ping')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('ping', 'https://docs.nestjs.com'),
    ]);
  }
}
