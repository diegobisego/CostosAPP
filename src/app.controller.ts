import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags, ApiOperation, ApiResponse} from '@nestjs/swagger' 

@ApiTags('Alive')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('alive')
  // aca van los decoradores para indicar los detalles de swagger
  @ApiOperation({ summary: 'Server UP', description: 'Verifica si el server esta UP' })
  @ApiResponse({ status: 200, description: 'Is Alive' })
  @ApiResponse({ status: 500, description: 'Not Alive' })



  getHello(): string {
    return 'Is Alive' // this.appService.getHello();
  }
}
