import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestDetailScalarWhereInput {

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    AND?: Array<OrderRequestDetailScalarWhereInput>;

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    OR?: Array<OrderRequestDetailScalarWhereInput>;

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    NOT?: Array<OrderRequestDetailScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    prodCd?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    orderQuantity?: IntFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    ssp?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    cbm?: FloatNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    wasOrderAlerted?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    orderRequestId?: IntFilter;
}
