import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailCreateManyInput } from './order-request-detail-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyOrderRequestDetailArgs {

    @Field(() => [OrderRequestDetailCreateManyInput], {nullable:false})
    @Type(() => OrderRequestDetailCreateManyInput)
    @ValidateNested()
    @Type(() => OrderRequestDetailCreateManyInput)
    data!: Array<OrderRequestDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
