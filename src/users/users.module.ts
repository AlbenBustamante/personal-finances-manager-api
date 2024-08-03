import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { ExpensesModule } from 'src/expenses/expenses.module';
import { IncomeModule } from 'src/income/income.module';
import { DebtsService } from 'src/debts/debts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ExpensesModule,
    IncomeModule,
    DebtsService,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
