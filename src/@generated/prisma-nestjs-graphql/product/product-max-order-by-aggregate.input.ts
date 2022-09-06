import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProductMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    prodCd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makerCd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    prodName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ssp180Days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    carton3SideSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minOrderQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isValid?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;
}
