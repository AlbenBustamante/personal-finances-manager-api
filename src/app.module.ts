import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnsModule } from './turns/turns.module';

@Module({
  imports: [TurnsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
