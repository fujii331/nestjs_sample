import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput } from '../order-request/order-request-unchecked-create-nested-many-without-order-entry.input';

@InputType()
export class OrderEntryUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  makerCd!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput, {
    nullable: true,
  })
  OrderRequest?: OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput;
}
