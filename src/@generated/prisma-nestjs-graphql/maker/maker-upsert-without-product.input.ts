import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerUpdateWithoutProductInput } from './maker-update-without-product.input';
import { Type } from 'class-transformer';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';

@InputType()
export class MakerUpsertWithoutProductInput {

    @Field(() => MakerUpdateWithoutProductInput, {nullable:false})
    @Type(() => MakerUpdateWithoutProductInput)
    update!: MakerUpdateWithoutProductInput;

    @Field(() => MakerCreateWithoutProductInput, {nullable:false})
    @Type(() => MakerCreateWithoutProductInput)
    create!: MakerCreateWithoutProductInput;
}
