import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { MakerUpdateOneRequiredWithoutOrderEntryNestedInput } from '../maker/maker-update-one-required-without-order-entry-nested.input';

@InputType()
export class OrderEntryUpdateWithoutOrderRequestInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => MakerUpdateOneRequiredWithoutOrderEntryNestedInput, {nullable:true})
    maker?: MakerUpdateOneRequiredWithoutOrderEntryNestedInput;
}
