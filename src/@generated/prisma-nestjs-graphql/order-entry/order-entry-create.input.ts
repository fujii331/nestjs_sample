import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { MakerCreateNestedOneWithoutOrderEntryInput } from '../maker/maker-create-nested-one-without-order-entry.input';
import { OrderRequestCreateNestedManyWithoutOrderEntryInput } from '../order-request/order-request-create-nested-many-without-order-entry.input';

@InputType()
export class OrderEntryCreateInput {
  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => MakerCreateNestedOneWithoutOrderEntryInput, { nullable: false })
  maker!: MakerCreateNestedOneWithoutOrderEntryInput;

  @Field(() => OrderRequestCreateNestedManyWithoutOrderEntryInput, {
    nullable: true,
  })
  orderRequest?: OrderRequestCreateNestedManyWithoutOrderEntryInput;
}
