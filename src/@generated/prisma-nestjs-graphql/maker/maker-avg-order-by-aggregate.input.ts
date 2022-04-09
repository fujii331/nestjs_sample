import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MakerAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  leadtime?: keyof typeof SortOrder;
}
