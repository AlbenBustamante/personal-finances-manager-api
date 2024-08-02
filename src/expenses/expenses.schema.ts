import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema({
  timestamps: true,
  toJSON: {
    getters: true,
    aliases: true,
  },
})
export class Expense {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true })
  category: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
