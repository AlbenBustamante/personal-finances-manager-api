import { Controller, Post } from '@nestjs/common';
import { DebtsService } from './debts.service';
import { CreateDbtDto } from './dtos/create-dbt.dto';

@Controller('debts')
export class DebtsController {
  constructor(private readonly debtService: DebtsService) {}

  @Post()
  create(createDebtDto: CreateDbtDto) {
    return this.debtService.create(createDebtDto);
  }
}
