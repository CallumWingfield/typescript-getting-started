import { Module } from '@nestjs/common';

import { ServiceService } from './service.service'


@Module({
  imports: [
  ],
  controllers: [],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
