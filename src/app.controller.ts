import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // controller takes url and executes the functions (same as controller/router in ExpressJS)
  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }
}
