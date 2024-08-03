import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Debt } from './debts.schema';
import { Model } from 'mongoose';
import { CreateDbtDto } from './dtos/create-dbt.dto';

@Injectable()
export class DebtsService {
  constructor(
    @InjectModel(Debt.name) private readonly debtModel: Model<Debt>,
  ) {}

  async create(createDebtDto: CreateDbtDto): Promise<Debt> {
    const debt = new this.debtModel(createDebtDto);
    return debt.save();
  }

  async getByUser(userId: string): Promise<Debt[]> {
    return this.debtModel.find({ userId: userId }).exec();
  }
}
