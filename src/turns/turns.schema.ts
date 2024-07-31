import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v7 as uuid } from 'uuid';

export type TurnDocument = HydratedDocument<Turn>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Turn {
  @Prop({
    type: String,
    unique: true,
    default: function genUUID() {
      return uuid();
    },
  })
  id: string;

  @Prop({ required: true })
  initialHour: Date;

  @Prop({ required: false })
  finalHour: Date;

  @Prop({ required: false })
  initialBreakHour: Date;

  @Prop({ required: false })
  finalBreakHour: Date;
}

export const TurnSchema = SchemaFactory.createForClass(Turn);
