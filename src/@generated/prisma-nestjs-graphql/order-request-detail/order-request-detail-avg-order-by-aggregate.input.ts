import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderRequestDetailAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ssp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cbm?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderRequestId?: keyof typeof SortOrder;
}
