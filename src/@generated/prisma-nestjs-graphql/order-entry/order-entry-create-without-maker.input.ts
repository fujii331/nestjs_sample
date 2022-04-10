import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequestCreateNestedManyWithoutOrderEntryInput } from '../order-request/order-request-create-nested-many-without-order-entry.input';

@InputType()
export class OrderEntryCreateWithoutMakerInput {
  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => OrderRequestCreateNestedManyWithoutOrderEntryInput, {
    nullable: true,
  })
  orderRequest?: OrderRequestCreateNestedManyWithoutOrderEntryInput;
}
