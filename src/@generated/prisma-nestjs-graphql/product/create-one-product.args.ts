import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCreateInput } from './product-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneProductArgs {

    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    @ValidateNested()
    @Type(() => ProductCreateInput)
    data!: ProductCreateInput;
}
