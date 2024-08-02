import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Income } from './income.schema';
import mongoose, { Model } from 'mongoose';
import { CreateIncomeDto } from './dtos/create-income.dto';

@Injectable()
export class IncomeService {
  constructor(
    @InjectModel(Income.name) private readonly incomeModel: Model<Income>,
  ) {}

  async create(createIncomeDto: CreateIncomeDto): Promise<Income> {
    const income = new this.incomeModel(createIncomeDto);
    return income.save();
  }

  async getAll(): Promise<Income[]> {
    return this.incomeModel.find().exec();
  }

  async getByUser(userId: string): Promise<Income[]> {
    return this.incomeModel.find({ userId: userId }).exec();
  }

  async getTotalByUser(userId: string): Promise<number> {
    const result = await this.incomeModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      { $group: { _id: null, total: { $sum: '$value' } } },
    ]);
    return result[0]?.total || 0;
  }
}
