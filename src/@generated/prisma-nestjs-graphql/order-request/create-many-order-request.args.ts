import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestCreateManyInput } from './order-request-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyOrderRequestArgs {

    @Field(() => [OrderRequestCreateManyInput], {nullable:false})
    @Type(() => OrderRequestCreateManyInput)
    @ValidateNested()
    @Type(() => OrderRequestCreateManyInput)
    data!: Array<OrderRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
