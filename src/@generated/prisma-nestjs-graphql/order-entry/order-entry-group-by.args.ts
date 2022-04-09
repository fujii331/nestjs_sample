import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';
import { OrderEntryOrderByWithAggregationInput } from './order-entry-order-by-with-aggregation.input';
import { OrderEntryScalarFieldEnum } from './order-entry-scalar-field.enum';
import { OrderEntryScalarWhereWithAggregatesInput } from './order-entry-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderEntryCountAggregateInput } from './order-entry-count-aggregate.input';
import { OrderEntryAvgAggregateInput } from './order-entry-avg-aggregate.input';
import { OrderEntrySumAggregateInput } from './order-entry-sum-aggregate.input';
import { OrderEntryMinAggregateInput } from './order-entry-min-aggregate.input';
import { OrderEntryMaxAggregateInput } from './order-entry-max-aggregate.input';

@ArgsType()
export class OrderEntryGroupByArgs {
  @Field(() => OrderEntryWhereInput, { nullable: true })
  where?: OrderEntryWhereInput;

  @Field(() => [OrderEntryOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<OrderEntryOrderByWithAggregationInput>;

  @Field(() => [OrderEntryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OrderEntryScalarFieldEnum>;

  @Field(() => OrderEntryScalarWhereWithAggregatesInput, { nullable: true })
  having?: OrderEntryScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OrderEntryCountAggregateInput, { nullable: true })
  _count?: OrderEntryCountAggregateInput;

  @Field(() => OrderEntryAvgAggregateInput, { nullable: true })
  _avg?: OrderEntryAvgAggregateInput;

  @Field(() => OrderEntrySumAggregateInput, { nullable: true })
  _sum?: OrderEntrySumAggregateInput;

  @Field(() => OrderEntryMinAggregateInput, { nullable: true })
  _min?: OrderEntryMinAggregateInput;

  @Field(() => OrderEntryMaxAggregateInput, { nullable: true })
  _max?: OrderEntryMaxAggregateInput;
}
