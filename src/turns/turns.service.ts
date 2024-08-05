import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Turn } from './turns.schema';
import { Model } from 'mongoose';
import { CreateTurnDto } from './dtos/create-turn.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TurnsService {
  constructor(
    @InjectModel(Turn.name) private readonly turnModel: Model<Turn>,
    private readonly userService: UsersService,
  ) {}

  async create(createTurnDto: CreateTurnDto): Promise<Turn> {
    const user = await this.userService.get(createTurnDto.userId);

    if (!user) {
      throw new Error('User not found');
    }

    createTurnDto.salary = user.salary;

    const turn = new this.turnModel(createTurnDto);
    return turn.save();
  }

  async getAllByUser(userId: string): Promise<Turn[]> {
    return this.turnModel.find({ userId: userId });
  }
}
