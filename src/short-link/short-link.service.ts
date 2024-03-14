import { Injectable } from '@nestjs/common';

@Injectable()
export class ShortLinkService {
  redirect(slug: string): string {
    throw new Error('Method not implemented.' + slug);
  }
}
