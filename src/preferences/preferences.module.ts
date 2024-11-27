import { Module } from '@nestjs/common';
import { UserPreferencesService } from './preferences.service';
import { UserPreferencesController } from './preferences.controller';
import {UserPreference,UserPreferenceSchema} from '../schemas/preferences.schema'
import { MongooseModule } from '@nestjs/mongoose';
 
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserPreference.name, schema: UserPreferenceSchema },
    ]),
  ],
  providers: [UserPreferencesService],
  controllers: [UserPreferencesController]
})
export class PreferencesModule {}
