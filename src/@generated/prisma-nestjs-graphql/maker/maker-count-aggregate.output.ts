import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class MakerCountAggregate {
  @Field(() => Int, { nullable: false })
  makerCd!: number;

  @Field(() => Int, { nullable: false })
  makerName!: number;

  @Field(() => Int, { nullable: false })
  leadtime!: number;

  @Field(() => Int, { nullable: false })
  isValid!: number;

  @HideField()
  createdAt!: number;

  @HideField()
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
