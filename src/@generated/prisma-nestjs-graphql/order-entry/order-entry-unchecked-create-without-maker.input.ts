import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput } from '../order-request/order-request-unchecked-create-nested-many-without-order-entry.input';

@InputType()
export class OrderEntryUncheckedCreateWithoutMakerInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput, {
    nullable: true,
  })
  OrderRequest?: OrderRequestUncheckedCreateNestedManyWithoutOrderEntryInput;
}
