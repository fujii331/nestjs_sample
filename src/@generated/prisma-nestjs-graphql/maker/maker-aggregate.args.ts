import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereInput } from './maker-where.input';
import { MakerOrderByWithRelationInput } from './maker-order-by-with-relation.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MakerCountAggregateInput } from './maker-count-aggregate.input';
import { MakerAvgAggregateInput } from './maker-avg-aggregate.input';
import { MakerSumAggregateInput } from './maker-sum-aggregate.input';
import { MakerMinAggregateInput } from './maker-min-aggregate.input';
import { MakerMaxAggregateInput } from './maker-max-aggregate.input';

@ArgsType()
export class MakerAggregateArgs {
  @Field(() => MakerWhereInput, { nullable: true })
  where?: MakerWhereInput;

  @Field(() => [MakerOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MakerOrderByWithRelationInput>;

  @Field(() => MakerWhereUniqueInput, { nullable: true })
  cursor?: MakerWhereUniqueInput;

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
