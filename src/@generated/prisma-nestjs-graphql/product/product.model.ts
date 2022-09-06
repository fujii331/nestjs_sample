import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Maker } from '../maker/maker.model';
import { OrderArrivalData } from '../order-arrival-data/order-arrival-data.model';
import { OrderRequestDetail } from '../order-request-detail/order-request-detail.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => String, {nullable:false})
    prodCd!: string;

    @Field(() => String, {nullable:false})
    makerCd!: string;

    @Field(() => String, {nullable:false})
    prodName!: string;

    @Field(() => Float, {nullable:true})
    ssp180Days!: number | null;

    @Field(() => Float, {nullable:true})
    carton3SideSize!: number | null;

    @Field(() => Int, {nullable:false})
    minOrderQuantity!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isValid!: boolean;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => Maker, {nullable:false})
    maker?: Maker;

    @Field(() => [OrderArrivalData], {nullable:true})
    orderArrivalData?: Array<OrderArrivalData>;

    @Field(() => [OrderRequestDetail], {nullable:true})
    orderRequestDetail?: Array<OrderRequestDetail>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
