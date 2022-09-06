import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { OrderEntryListRelationFilter } from '../order-entry/order-entry-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class MakerWhereInput {

    @Field(() => [MakerWhereInput], {nullable:true})
    AND?: Array<MakerWhereInput>;

    @Field(() => [MakerWhereInput], {nullable:true})
    OR?: Array<MakerWhereInput>;

    @Field(() => [MakerWhereInput], {nullable:true})
    NOT?: Array<MakerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    makerCd?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    makerName?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    leadtime?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isValid?: BoolFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => OrderEntryListRelationFilter, {nullable:true})
    orderEntry?: OrderEntryListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    product?: ProductListRelationFilter;
}
