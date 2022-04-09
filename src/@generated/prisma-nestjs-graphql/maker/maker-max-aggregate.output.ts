import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class MakerMaxAggregate {
  @Field(() => String, { nullable: true })
  makerCd?: string;

  @Field(() => String, { nullable: true })
  makerName?: string;

  @Field(() => Int, { nullable: true })
  leadtime?: number;

  @Field(() => Boolean, { nullable: true })
  isValid?: boolean;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
