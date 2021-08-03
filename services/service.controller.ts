import { Body, Controller, Get, Post } from '@nestjs/common';
import { CryptDto } from './dto/crypt.dto';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private serviceClass: ServiceService) {

  }

  @Get('crypt')
  async login(@Body() dto: CryptDto) {
    console.log(dto.imgUrl);
    console.log(dto.funData.analyticsTier);
    return this.serviceClass.getCaptchaCrypt(dto);
  }

  
}
