import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCreateManyInput } from './product-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyProductArgs {

    @Field(() => [ProductCreateManyInput], {nullable:false})
    @Type(() => ProductCreateManyInput)
    @ValidateNested()
    @Type(() => ProductCreateManyInput)
    data!: Array<ProductCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
