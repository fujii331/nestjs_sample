import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyMakerInput } from './product-create-many-maker.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyMakerInputEnvelope {

    @Field(() => [ProductCreateManyMakerInput], {nullable:false})
    @Type(() => ProductCreateManyMakerInput)
    data!: Array<ProductCreateManyMakerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
