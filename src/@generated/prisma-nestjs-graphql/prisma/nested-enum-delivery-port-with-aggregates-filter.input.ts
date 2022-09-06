import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryPort } from './delivery-port.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDeliveryPortFilter } from './nested-enum-delivery-port-filter.input';

@InputType()
export class NestedEnumDeliveryPortWithAggregatesFilter {

    @Field(() => DeliveryPort, {nullable:true})
    equals?: keyof typeof DeliveryPort;

    @Field(() => [DeliveryPort], {nullable:true})
    in?: Array<keyof typeof DeliveryPort>;

    @Field(() => [DeliveryPort], {nullable:true})
    notIn?: Array<keyof typeof DeliveryPort>;

    @Field(() => NestedEnumDeliveryPortWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDeliveryPortWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDeliveryPortFilter, {nullable:true})
    _min?: NestedEnumDeliveryPortFilter;

    @Field(() => NestedEnumDeliveryPortFilter, {nullable:true})
    _max?: NestedEnumDeliveryPortFilter;
}
