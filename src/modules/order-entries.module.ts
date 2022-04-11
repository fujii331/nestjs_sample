import { Module } from '@nestjs/common';
import { PrismaService } from '../../src/prisma.service';
import { OrderEntriesService } from 'src/services/order-entries.service';
import { OrderEntriesResolver } from 'src/resolvers/order-entries.resolver';
import { OrderEntriesRepository } from 'src/repositories/order-entries.repository';

@Module({
  providers: [
    OrderEntriesService,
    OrderEntriesResolver,
    OrderEntriesRepository,
    PrismaService,
  ],
})
export class OrderEntriesModule {}
