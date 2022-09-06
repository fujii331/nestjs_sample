import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateManyProductInput } from './order-request-detail-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderRequestDetailCreateManyProductInputEnvelope {

    @Field(() => [OrderRequestDetailCreateManyProductInput], {nullable:false})
    @Type(() => OrderRequestDetailCreateManyProductInput)
    data!: Array<OrderRequestDetailCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
