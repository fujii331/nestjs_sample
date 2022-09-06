import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PoStatus } from './po-status.enum';

@InputType()
export class EnumPoStatusFieldUpdateOperationsInput {

    @Field(() => PoStatus, {nullable:true})
    set?: keyof typeof PoStatus;
}
