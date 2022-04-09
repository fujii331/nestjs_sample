import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUncheckedUpdateManyWithoutOrderEntryInput } from '../order-request/order-request-unchecked-update-many-without-order-entry.input';

@InputType()
export class OrderEntryUncheckedUpdateWithoutMakerInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => OrderRequestUncheckedUpdateManyWithoutOrderEntryInput, {
    nullable: true,
  })
  OrderRequest?: OrderRequestUncheckedUpdateManyWithoutOrderEntryInput;
}
