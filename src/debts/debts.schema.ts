import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DebtDocument = HydratedDocument<Debt>;

@Schema({
  toJSON: {
    getters: true,
    aliases: true,
  },
  timestamps: true,
})
export class Debt {
  @Prop({ required: true })
  description: true;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  category: true;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({ type: Boolean, required: true })
  inFavor: boolean;

  @Prop({ required: true })
  client: string;
}

export const DebtSchema = SchemaFactory.createForClass(Debt);
