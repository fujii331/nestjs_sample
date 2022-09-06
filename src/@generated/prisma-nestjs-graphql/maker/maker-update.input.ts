import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { OrderEntryUpdateManyWithoutMakerNestedInput } from '../order-entry/order-entry-update-many-without-maker-nested.input';
import { ProductUpdateManyWithoutMakerNestedInput } from '../product/product-update-many-without-maker-nested.input';

@InputType()
export class MakerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makerCd?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    makerName?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    leadtime?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isValid?: BoolFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderEntryUpdateManyWithoutMakerNestedInput, {nullable:true})
    orderEntry?: OrderEntryUpdateManyWithoutMakerNestedInput;

    @Field(() => ProductUpdateManyWithoutMakerNestedInput, {nullable:true})
    product?: ProductUpdateManyWithoutMakerNestedInput;
}
