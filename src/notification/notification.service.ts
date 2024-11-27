
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from '../schemas/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(NotificationLog.name) private readonly notificationLogModel: Model<NotificationLog>
  ) {}


  async sendNotification(userId: string, type: string, channel: string, content: any) {
    
    const notification = new this.notificationLogModel({
      userId,
      type,
      channel,
      status: 'pending',
      metadata: content,
    });

    await notification.save();

  
    await notification.updateOne({ status: 'sent', sentAt: new Date() });

    return notification;
  }

 
  async getNotificationLogs(userId: string) {
    return this.notificationLogModel.find({ userId }).exec();
  }

  
  async getNotificationStats() {
    const stats = await this.notificationLogModel.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
    return stats;
  }
}
