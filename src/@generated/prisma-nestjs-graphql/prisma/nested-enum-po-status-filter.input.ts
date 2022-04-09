import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PoStatus } from './po-status.enum';

@InputType()
export class NestedEnumPoStatusFilter {
  @Field(() => PoStatus, { nullable: true })
  equals?: keyof typeof PoStatus;

  @Field(() => [PoStatus], { nullable: true })
  in?: Array<keyof typeof PoStatus>;

  @Field(() => [PoStatus], { nullable: true })
  notIn?: Array<keyof typeof PoStatus>;

  @Field(() => NestedEnumPoStatusFilter, { nullable: true })
  not?: NestedEnumPoStatusFilter;
}
