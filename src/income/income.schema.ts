import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/users.schema';

export type IncomeDocument = HydratedDocument<Income>;

@Schema({
  toJSON: {
    getters: true,
    aliases: true,
  },
  timestamps: true,
})
export class Income {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  category: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ required: true })
  date: Date;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
