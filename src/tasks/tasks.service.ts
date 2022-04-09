import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { UsersService } from '../../src/users/users.service';

@Injectable()
export class TasksService {
  constructor(private usersService: UsersService) {}
  private readonly logger = new Logger(TasksService.name);

  //* * * * * *
  // | | | | | |
  // | | | | | day of week
  // | | | | months
  // | | | day of month
  // | | hours
  // | minutes
  // seconds (optional)
  @Cron('0 0 8 * * *')
  async handleCron() {
    // const user = await this.usersService.createUser({
    //   data: {
    //     email: 'test-cron@example.com',
    //     name: 'test-cron',
    //     password: 'password12345',
    //   },
    // });
    this.logger.debug('スケジュール実行');
  }

  // @Interval(50000)
  // handleInterval() {
  //   this.logger.debug('Called every 10 seconds');
  // }

  // @Timeout(5000)
  // handleTimeout() {
  //   this.logger.debug('Called once after 5 seconds');
  // }
}
