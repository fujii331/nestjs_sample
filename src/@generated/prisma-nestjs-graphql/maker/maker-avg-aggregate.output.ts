import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MakerAvgAggregate {

    @Field(() => Float, {nullable:true})
    leadtime?: number;
}
