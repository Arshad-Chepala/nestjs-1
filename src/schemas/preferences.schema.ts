import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserPreferenceDocument = UserPreference & Document;

@Schema({ timestamps: true }) 
export class UserPreference {
  @Prop({ required: true })
  userId: string; // User's unique ID

  @Prop({ required: true, unique: true, match: /.+\@.+\..+/ })
  email: string; 

  @Prop({
    type: {
      marketing: Boolean,
      newsletter: Boolean,
      updates: Boolean,
      frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'never'] },
      channels: { email: Boolean, sms: Boolean, push: Boolean },
    },
  })
  preferences: Record<string, any>; 

  @Prop({ required: true })
  timezone: string; 
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
