import { forwardRef, Module } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { TurnsController } from './turns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Turn, TurnSchema } from './turns.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Turn.name, schema: TurnSchema }]),
    forwardRef(() => UsersModule),
  ],
  providers: [TurnsService],
  controllers: [TurnsController],
  exports: [TurnsService],
})
export class TurnsModule {}
