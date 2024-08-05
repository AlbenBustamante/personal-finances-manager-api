import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/users.schema';

export type TurnDocument = HydratedDocument<Turn>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Turn {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  initialHour: Date;

  @Prop({ required: false })
  finalHour: Date;

  @Prop({ required: false })
  initialBreakHour: Date;

  @Prop({ required: false })
  finalBreakHour: Date;

  @Prop({ required: true })
  salary: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: User;
}

export const TurnSchema = SchemaFactory.createForClass(Turn);
