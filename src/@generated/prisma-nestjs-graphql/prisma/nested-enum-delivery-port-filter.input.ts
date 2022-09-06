import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryPort } from './delivery-port.enum';

@InputType()
export class NestedEnumDeliveryPortFilter {

    @Field(() => DeliveryPort, {nullable:true})
    equals?: keyof typeof DeliveryPort;

    @Field(() => [DeliveryPort], {nullable:true})
    in?: Array<keyof typeof DeliveryPort>;

    @Field(() => [DeliveryPort], {nullable:true})
    notIn?: Array<keyof typeof DeliveryPort>;

    @Field(() => NestedEnumDeliveryPortFilter, {nullable:true})
    not?: NestedEnumDeliveryPortFilter;
}
