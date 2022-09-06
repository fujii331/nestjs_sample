import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUpdateOneRequiredWithoutOrderRequestDetailNestedInput } from '../order-request/order-request-update-one-required-without-order-request-detail-nested.input';
import { ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput } from '../product/product-update-one-required-without-order-request-detail-nested.input';

@InputType()
export class OrderRequestDetailUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderQuantity?: IntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    ssp?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    cbm?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    wasOrderAlerted?: BoolFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderRequestUpdateOneRequiredWithoutOrderRequestDetailNestedInput, {nullable:true})
    orderRequest?: OrderRequestUpdateOneRequiredWithoutOrderRequestDetailNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput;
}
