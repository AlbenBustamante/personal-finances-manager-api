import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { ExpensesModule } from 'src/expenses/expenses.module';
import { IncomeModule } from 'src/income/income.module';
import { TurnsModule } from 'src/turns/turns.module';
import { DebtsModule } from 'src/debts/debts.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ExpensesModule,
    IncomeModule,
    DebtsModule,
    forwardRef(() => TurnsModule),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
