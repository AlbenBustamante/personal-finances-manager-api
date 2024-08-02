import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expense } from './expenses.schema';
import mongoose, { Model } from 'mongoose';
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

  async getByUser(userId: string): Promise<Expense[]> {
    return this.expenseModel.find({ userId: userId }).exec();
  }

  async getTotalByUser(userId: string): Promise<number> {
    const result = await this.expenseModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, total: { $sum: '$value' } } },
    ]);
    return result[0]?.total || 0;
  }
}
