import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderRequest_deliveryPort } from './order-request-delivery-port.enum';
import { PoStatus } from '../prisma/po-status.enum';
import { HideField } from '@nestjs/graphql';
import { OrderEntry } from '../order-entry/order-entry.model';
import { OrderRequestDetail } from '../order-request-detail/order-request-detail.model';
import { OrderRequestCount } from './order-request-count.output';

@ObjectType()
export class OrderRequest {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    containerNo!: number;

    @Field(() => String, {nullable:false})
    orderRequestNo!: string;

    @Field(() => Date, {nullable:false})
    deliveryDate!: Date;

    @Field(() => Date, {nullable:true})
    poRequestDate!: Date | null;

    @Field(() => OrderRequest_deliveryPort, {nullable:false,defaultValue:'OTHER'})
    deliveryPort!: keyof typeof OrderRequest_deliveryPort;

    @Field(() => PoStatus, {nullable:false,defaultValue:'NOTISSUED'})
    poStatus!: keyof typeof PoStatus;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    discarded!: boolean;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    orderEntryId!: number;

    @Field(() => OrderEntry, {nullable:false})
    orderEntry?: OrderEntry;

    @Field(() => [OrderRequestDetail], {nullable:true})
    orderRequestDetail?: Array<OrderRequestDetail>;

    @Field(() => OrderRequestCount, {nullable:false})
    _count?: OrderRequestCount;
}
