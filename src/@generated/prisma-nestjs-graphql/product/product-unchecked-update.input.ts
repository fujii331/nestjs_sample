import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { OrderArrivalDataUncheckedUpdateManyWithoutProductInput } from '../order-arrival-data/order-arrival-data-unchecked-update-many-without-product.input';
import { OrderRequestDetailUncheckedUpdateManyWithoutProductInput } from '../order-request-detail/order-request-detail-unchecked-update-many-without-product.input';

@InputType()
export class ProductUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  prodCd?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  makerCd?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  prodName?: StringFieldUpdateOperationsInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  ssp180Days?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
  carton3SideSize?: NullableFloatFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  minOrderQuantity?: IntFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isValid?: BoolFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => OrderArrivalDataUncheckedUpdateManyWithoutProductInput, {
    nullable: true,
  })
  orderArrivalData?: OrderArrivalDataUncheckedUpdateManyWithoutProductInput;

  @Field(() => OrderRequestDetailUncheckedUpdateManyWithoutProductInput, {
    nullable: true,
  })
  orderRequestDetail?: OrderRequestDetailUncheckedUpdateManyWithoutProductInput;
}
