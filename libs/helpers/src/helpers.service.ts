import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { IpResponse } from './ip.response';

@Injectable()
export class HelpersService {
  private readonly logger = new Logger(HelpersService.name);
  constructor(private readonly httpService: HttpService) {}

  async find(query: string): Promise<IpResponse> {
    const { data } = await firstValueFrom(
      this.httpService.get<IpResponse>(`http://ip-api.com/json/${query}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
