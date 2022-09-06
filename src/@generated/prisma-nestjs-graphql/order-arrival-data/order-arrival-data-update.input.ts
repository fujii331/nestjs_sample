import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumDeliveryPortFieldUpdateOperationsInput } from '../prisma/enum-delivery-port-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput } from '../product/product-update-one-required-without-order-arrival-data-nested.input';

@InputType()
export class OrderArrivalDataUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderQuantity?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumDeliveryPortFieldUpdateOperationsInput, {nullable:true})
    deliveryPort?: EnumDeliveryPortFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput;
}
