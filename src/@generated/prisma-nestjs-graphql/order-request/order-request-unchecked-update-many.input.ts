import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumOrderRequest_deliveryPortFieldUpdateOperationsInput } from '../prisma/enum-order-request-delivery-port-field-update-operations.input';
import { EnumPoStatusFieldUpdateOperationsInput } from '../prisma/enum-po-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestUncheckedUpdateManyInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  containerNo?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  orderRequestNo?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  deliveryDate?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  poRequestDate?: DateTimeFieldUpdateOperationsInput;

  @Field(() => EnumOrderRequest_deliveryPortFieldUpdateOperationsInput, {
    nullable: true,
  })
  deliveryPort?: EnumOrderRequest_deliveryPortFieldUpdateOperationsInput;

  @Field(() => EnumPoStatusFieldUpdateOperationsInput, { nullable: true })
  poStatus?: EnumPoStatusFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  discarded?: BoolFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  OrderEntryId?: IntFieldUpdateOperationsInput;
}
