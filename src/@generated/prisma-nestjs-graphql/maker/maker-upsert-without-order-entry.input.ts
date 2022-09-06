import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerUpdateWithoutOrderEntryInput } from './maker-update-without-order-entry.input';
import { Type } from 'class-transformer';
import { MakerCreateWithoutOrderEntryInput } from './maker-create-without-order-entry.input';

@InputType()
export class MakerUpsertWithoutOrderEntryInput {

    @Field(() => MakerUpdateWithoutOrderEntryInput, {nullable:false})
    @Type(() => MakerUpdateWithoutOrderEntryInput)
    update!: MakerUpdateWithoutOrderEntryInput;

    @Field(() => MakerCreateWithoutOrderEntryInput, {nullable:false})
    @Type(() => MakerCreateWithoutOrderEntryInput)
    create!: MakerCreateWithoutOrderEntryInput;
}
