import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PoStatus } from './po-status.enum';
import { NestedEnumPoStatusWithAggregatesFilter } from './nested-enum-po-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPoStatusFilter } from './nested-enum-po-status-filter.input';

@InputType()
export class EnumPoStatusWithAggregatesFilter {

    @Field(() => PoStatus, {nullable:true})
    equals?: keyof typeof PoStatus;

    @Field(() => [PoStatus], {nullable:true})
    in?: Array<keyof typeof PoStatus>;

    @Field(() => [PoStatus], {nullable:true})
    notIn?: Array<keyof typeof PoStatus>;

    @Field(() => NestedEnumPoStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPoStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPoStatusFilter, {nullable:true})
    _min?: NestedEnumPoStatusFilter;

    @Field(() => NestedEnumPoStatusFilter, {nullable:true})
    _max?: NestedEnumPoStatusFilter;
}
