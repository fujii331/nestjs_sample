import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PoStatus } from './po-status.enum';
import { NestedEnumPoStatusFilter } from './nested-enum-po-status-filter.input';

@InputType()
export class EnumPoStatusFilter {

    @Field(() => PoStatus, {nullable:true})
    equals?: keyof typeof PoStatus;

    @Field(() => [PoStatus], {nullable:true})
    in?: Array<keyof typeof PoStatus>;

    @Field(() => [PoStatus], {nullable:true})
    notIn?: Array<keyof typeof PoStatus>;

    @Field(() => NestedEnumPoStatusFilter, {nullable:true})
    not?: NestedEnumPoStatusFilter;
}
