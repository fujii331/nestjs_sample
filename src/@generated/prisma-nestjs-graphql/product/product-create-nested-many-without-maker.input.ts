import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutMakerInput } from './product-create-or-connect-without-maker.input';
import { ProductCreateManyMakerInputEnvelope } from './product-create-many-maker-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutMakerInput {

    @Field(() => [ProductCreateWithoutMakerInput], {nullable:true})
    @Type(() => ProductCreateWithoutMakerInput)
    create?: Array<ProductCreateWithoutMakerInput>;

    @Field(() => [ProductCreateOrConnectWithoutMakerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMakerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMakerInput>;

    @Field(() => ProductCreateManyMakerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMakerInputEnvelope)
    createMany?: ProductCreateManyMakerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}
