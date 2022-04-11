import { Injectable } from '@nestjs/common';
import { OrderEntriesRepository } from '../../src/repositories/order-entries.repository';
import { CreateOneOrderEntryArgs } from '../../src/@generated/prisma-nestjs-graphql/order-entry/create-one-order-entry.args';
import { OrderEntry } from '../../src/@generated/prisma-nestjs-graphql/order-entry/order-entry.model';
import { UpdateOneOrderEntryArgs } from '../../src/@generated/prisma-nestjs-graphql/order-entry/update-one-order-entry.args';
import { OrderEntriesInput } from '../../src/interfaces/order-entries/order-entries.input';
import { FirstOrderEntryInput } from '../../src/interfaces/order-entries/first-order-entry.input';

@Injectable()
export class OrderEntriesService {
  constructor(private readonly repository: OrderEntriesRepository) {}

  async findOrderEntries(
    args: OrderEntriesInput,
  ): Promise<OrderEntry[] | null> {
    const orderEntries = this.repository.findOrderEntries(args);

    // 値を手に入れる方法
    // const test = await this.repository.findOrderEntries(args).then((result) => {
    //   return result;
    // });
    // console.log(test);

    return orderEntries;
  }

  async findFirstOrderEntry(
    args: FirstOrderEntryInput,
  ): Promise<OrderEntry | null> {
    return this.repository.findFirstOrderEntry(args);
  }

  async createOrderEntry(args: CreateOneOrderEntryArgs): Promise<OrderEntry> {
    return this.repository.createOrderEntry(args);
  }

  async updateOrderEntry(args: UpdateOneOrderEntryArgs): Promise<OrderEntry> {
    return this.repository.updateOrderEntry(args);
  }
}
