import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { MakerUpdateOneRequiredWithoutOrderEntryNestedInput } from '../maker/maker-update-one-required-without-order-entry-nested.input';

@InputType()
export class OrderEntryUpdateWithoutOrderRequestInput {

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MakerUpdateOneRequiredWithoutOrderEntryNestedInput, {nullable:true})
    maker?: MakerUpdateOneRequiredWithoutOrderEntryNestedInput;
}
