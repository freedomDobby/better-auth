import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Nest';
  }

  getHi(): string {
    return 'Hi Nest'
  }
}
