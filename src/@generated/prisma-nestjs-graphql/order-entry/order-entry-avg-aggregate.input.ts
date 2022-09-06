import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderEntryAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
