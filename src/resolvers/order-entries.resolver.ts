import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { SkipAuth } from '../../src/common/decorators/metadata/skip_auth.metadata';
import { OrderEntry } from '../../src/@generated/prisma-nestjs-graphql/order-entry/order-entry.model';
import { OrderEntriesService } from '../../src/services/order-entries.service';
import { OrderEntriesInput } from '../../src/interfaces/order-entries/order-entries.input';
import { CreateOneOrderEntryArgs } from '../../src/@generated/prisma-nestjs-graphql/order-entry/create-one-order-entry.args';
import { FirstOrderEntryInput } from '../../src/interfaces/order-entries/first-order-entry.input';

@Resolver(() => OrderEntry)
export class OrderEntriesResolver {
  constructor(private readonly orderEntriesService: OrderEntriesService) {}

  @Query(() => [OrderEntry], { nullable: true })
  @SkipAuth()
  orderEntries(@Args('orderEntriesInput') args: OrderEntriesInput) {
    return this.orderEntriesService.findOrderEntries(args);
  }

  @Query(() => OrderEntry, { nullable: true })
  @SkipAuth()
  firstOrderEntry(@Args('firstOrderEntryInput') args: FirstOrderEntryInput) {
    return this.orderEntriesService.findFirstOrderEntry(args);
  }

  @Mutation(() => OrderEntry)
  @SkipAuth()
  async createOrderEntry(@Args() args: CreateOneOrderEntryArgs) {
    return this.orderEntriesService.createOrderEntry(args);
  }
}
