import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MakerCountAggregate } from './maker-count-aggregate.output';
import { MakerAvgAggregate } from './maker-avg-aggregate.output';
import { MakerSumAggregate } from './maker-sum-aggregate.output';
import { MakerMinAggregate } from './maker-min-aggregate.output';
import { MakerMaxAggregate } from './maker-max-aggregate.output';

@ObjectType()
export class AggregateMaker {
  @Field(() => MakerCountAggregate, { nullable: true })
  _count?: MakerCountAggregate;

  @Field(() => MakerAvgAggregate, { nullable: true })
  _avg?: MakerAvgAggregate;

  @Field(() => MakerSumAggregate, { nullable: true })
  _sum?: MakerSumAggregate;

  @Field(() => MakerMinAggregate, { nullable: true })
  _min?: MakerMinAggregate;

  @Field(() => MakerMaxAggregate, { nullable: true })
  _max?: MakerMaxAggregate;
}
