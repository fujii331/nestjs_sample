import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderEntry } from '../order-entry/order-entry.model';
import { Product } from '../product/product.model';
import { MakerCount } from './maker-count.output';

@ObjectType()
export class Maker {

    @Field(() => String, {nullable:false})
    makerCd!: string;

    @Field(() => String, {nullable:false})
    makerName!: string;

    @Field(() => Int, {nullable:false})
    leadtime!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isValid!: boolean;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => [OrderEntry], {nullable:true})
    orderEntry?: Array<OrderEntry>;

    @Field(() => [Product], {nullable:true})
    product?: Array<Product>;

    @Field(() => MakerCount, {nullable:false})
    _count?: MakerCount;
}
