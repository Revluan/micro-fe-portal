import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/config')
  findAll() {
    return [
      {
        name: 'dashboard',
        entry: 'http://localhost:5174', // 生产环境可以改为 CDN 地址
        activeWhen: '/dashboard',
        version: '1.0.0',
      },
    ]
  }
}
