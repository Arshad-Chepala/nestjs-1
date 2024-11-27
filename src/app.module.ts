import { PreferencesModule } from './preferences/preferences.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { NotificationLogModule } from './notification/notification.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL), 
    PreferencesModule, 
    NotificationLogModule,
  ],
})
export class AppModule {}
