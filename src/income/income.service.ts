import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Income } from './income.schema';
import { Model } from 'mongoose';
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
}
