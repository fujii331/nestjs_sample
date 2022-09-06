import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProductScalarWhereInput {

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    prodCd?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makerCd?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    prodName?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    ssp180Days?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    carton3SideSize?: FloatNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    minOrderQuantity?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isValid?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
