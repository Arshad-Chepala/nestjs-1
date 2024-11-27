import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationLogDocument = NotificationLog & Document;

@Schema({ timestamps: true })
export class NotificationLog {
  @Prop({ required: true })
  userId: string;

  @Prop({ enum: ['marketing', 'newsletter', 'updates'], required: true })
  type: string;

  @Prop({ enum: ['email', 'sms', 'push'], required: true })
  channel: string;

  @Prop({ enum: ['pending', 'sent', 'failed'], required: true })
  status: string;

  @Prop()
  sentAt?: Date;

  @Prop()
  failureReason?: string;

  @Prop({ type: Object })
  metadata: Record<string, any>; 
}

export const NotificationLogSchema = SchemaFactory.createForClass(NotificationLog);
