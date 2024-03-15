import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ShortLinkService } from './short-link/short-link.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ShortLinkService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "404 Not found"', () => {
      expect(appController.getHello()).toBe('404 Not found');
    });
  });
});
