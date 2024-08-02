import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ExpensesService } from 'src/expenses/expenses.service';
import { IncomeService } from 'src/income/income.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly expenseService: ExpensesService,
    private readonly incomeService: IncomeService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.userService.get(id);
  }

  @Get(':id/expenses')
  async getExpenses(@Param('id') id: string) {
    const expenses = await this.expenseService.getByUser(id);
    const total = await this.expenseService.getTotalByUser(id);
    return { expenses, total };
  }

  @Get(':id/income')
  async getIncome(@Param('id') id: string) {
    const income = await this.incomeService.getByUser(id);
    const total = await this.incomeService.getTotalByUser(id);
    return { income, total };
  }

  @Get(':id/balance')
  async getBalance(@Param('id') id: string) {
    const income = await this.incomeService.getTotalByUser(id);
    const expenses = await this.expenseService.getTotalByUser(id);
    const balance = income - expenses;

    return { balance };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
