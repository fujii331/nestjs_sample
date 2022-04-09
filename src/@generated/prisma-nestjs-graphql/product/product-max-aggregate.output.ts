import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ProductMaxAggregate {
  @Field(() => String, { nullable: true })
  prodCd?: string;

  @Field(() => String, { nullable: true })
  prodName?: string;

  @Field(() => Float, { nullable: true })
  ssp180Days?: number;

  @Field(() => Float, { nullable: true })
  carton3SideSize?: number;

  @Field(() => Int, { nullable: true })
  minOrderQuantity?: number;

  @Field(() => Boolean, { nullable: true })
  isValid?: boolean;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
