import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUpdateManyWithoutOrderEntryInput } from '../order-request/order-request-update-many-without-order-entry.input';

@InputType()
export class OrderEntryUpdateWithoutMakerInput {
  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => OrderRequestUpdateManyWithoutOrderEntryInput, { nullable: true })
  OrderRequest?: OrderRequestUpdateManyWithoutOrderEntryInput;
}
