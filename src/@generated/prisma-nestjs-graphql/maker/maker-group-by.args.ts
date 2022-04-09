import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereInput } from './maker-where.input';
import { MakerOrderByWithAggregationInput } from './maker-order-by-with-aggregation.input';
import { MakerScalarFieldEnum } from './maker-scalar-field.enum';
import { MakerScalarWhereWithAggregatesInput } from './maker-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MakerCountAggregateInput } from './maker-count-aggregate.input';
import { MakerAvgAggregateInput } from './maker-avg-aggregate.input';
import { MakerSumAggregateInput } from './maker-sum-aggregate.input';
import { MakerMinAggregateInput } from './maker-min-aggregate.input';
import { MakerMaxAggregateInput } from './maker-max-aggregate.input';

@ArgsType()
export class MakerGroupByArgs {
  @Field(() => MakerWhereInput, { nullable: true })
  where?: MakerWhereInput;

  @Field(() => [MakerOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<MakerOrderByWithAggregationInput>;

  @Field(() => [MakerScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MakerScalarFieldEnum>;

  @Field(() => MakerScalarWhereWithAggregatesInput, { nullable: true })
  having?: MakerScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MakerCountAggregateInput, { nullable: true })
  _count?: MakerCountAggregateInput;

  @Field(() => MakerAvgAggregateInput, { nullable: true })
  _avg?: MakerAvgAggregateInput;

  @Field(() => MakerSumAggregateInput, { nullable: true })
  _sum?: MakerSumAggregateInput;

  @Field(() => MakerMinAggregateInput, { nullable: true })
  _min?: MakerMinAggregateInput;

  @Field(() => MakerMaxAggregateInput, { nullable: true })
  _max?: MakerMaxAggregateInput;
}
