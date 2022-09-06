import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { OrderArrivalDataUpdateManyWithoutProductNestedInput } from '../order-arrival-data/order-arrival-data-update-many-without-product-nested.input';
import { OrderRequestDetailUpdateManyWithoutProductNestedInput } from '../order-request-detail/order-request-detail-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateWithoutMakerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    prodCd?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    prodName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    ssp180Days?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    carton3SideSize?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minOrderQuantity?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isValid?: BoolFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderArrivalDataUpdateManyWithoutProductNestedInput, {nullable:true})
    orderArrivalData?: OrderArrivalDataUpdateManyWithoutProductNestedInput;

    @Field(() => OrderRequestDetailUpdateManyWithoutProductNestedInput, {nullable:true})
    orderRequestDetail?: OrderRequestDetailUpdateManyWithoutProductNestedInput;
}
