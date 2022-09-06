import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateManyOrderRequestInput } from './order-request-detail-create-many-order-request.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderRequestDetailCreateManyOrderRequestInputEnvelope {

    @Field(() => [OrderRequestDetailCreateManyOrderRequestInput], {nullable:false})
    @Type(() => OrderRequestDetailCreateManyOrderRequestInput)
    data!: Array<OrderRequestDetailCreateManyOrderRequestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
