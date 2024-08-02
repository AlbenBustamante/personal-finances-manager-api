import { Body, Controller, Get, Post } from '@nestjs/common';
import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dtos/create-income.dto';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  create(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomeService.create(createIncomeDto);
  }

  @Get()
  getAll() {
    return this.incomeService.getAll();
  }
}
