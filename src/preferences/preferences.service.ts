
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from '../schemas/preferences.schema';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name)
    private readonly userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(data: UserPreference): Promise<UserPreference> {
    return new this.userPreferenceModel(data).save();
  }

  async findByUserId(userId: string): Promise<UserPreference> {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  async update(userId: string, updates: Partial<UserPreference>): Promise<UserPreference> {
    return this.userPreferenceModel
      .findOneAndUpdate({ userId }, updates, { new: true })
      .exec();
  }

  async delete(userId: string): Promise<void> {
    await this.userPreferenceModel.deleteOne({ userId }).exec();
  }
}

