import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './expenses.schema';
import { Model } from 'mongoose';
import { CreateExpenseDto } from './dtos/create-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private readonly expenseModel: Model<Expense>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const expense = new this.expenseModel(createExpenseDto);
    return expense.save();
  }

  async getAll(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }
}
