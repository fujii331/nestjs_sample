import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutMakerInput } from './product-create-or-connect-without-maker.input';
import { ProductUpsertWithWhereUniqueWithoutMakerInput } from './product-upsert-with-where-unique-without-maker.input';
import { ProductCreateManyMakerInputEnvelope } from './product-create-many-maker-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutMakerInput } from './product-update-with-where-unique-without-maker.input';
import { ProductUpdateManyWithWhereWithoutMakerInput } from './product-update-many-with-where-without-maker.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutMakerNestedInput {

    @Field(() => [ProductCreateWithoutMakerInput], {nullable:true})
    @Type(() => ProductCreateWithoutMakerInput)
    create?: Array<ProductCreateWithoutMakerInput>;

    @Field(() => [ProductCreateOrConnectWithoutMakerInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMakerInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMakerInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutMakerInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutMakerInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutMakerInput>;

    @Field(() => ProductCreateManyMakerInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyMakerInputEnvelope)
    createMany?: ProductCreateManyMakerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutMakerInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutMakerInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutMakerInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutMakerInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutMakerInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutMakerInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
