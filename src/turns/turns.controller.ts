import { Body, Controller, Post } from '@nestjs/common';
import { TurnsService } from './turns.service';
import { CreateTurnDto } from './dtos/create-turn.dto';

@Controller('turns')
export class TurnsController {
  constructor(private readonly turnService: TurnsService) {}

  @Post()
  create(@Body() createTurnDto: CreateTurnDto) {
    return this.turnService.create(createTurnDto);
  }
}
