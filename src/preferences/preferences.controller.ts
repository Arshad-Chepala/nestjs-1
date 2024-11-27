import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserPreferencesService } from './preferences.service';
import { UserPreference } from '../schemas/preferences.schema';

@Controller('api/preferences')
export class UserPreferencesController {
  
  constructor(private readonly userPreferencesService: UserPreferencesService) {}

  @Post()
  async create(@Body() data: UserPreference): Promise<UserPreference> {
    console.log("inside post");
    return this.userPreferencesService.create(data);
  }

  @Get(':userId')
  async findByUserId(@Param('userId') userId: string): Promise<UserPreference> {
    console.log("inside findbyUserId");
    return this.userPreferencesService.findByUserId(userId);
  }

  @Patch(':userId')
  async update(@Param('userId') userId: string, @Body() updates: Partial<UserPreference>): Promise<UserPreference> {
    console.log("inside update")
    return this.userPreferencesService.update(userId, updates);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string): Promise<void> {
    console.log("inside delete")
    return this.userPreferencesService.delete(userId);
  }
   consloemethod () {
    console.log('this is preference controller ')
   }

}
