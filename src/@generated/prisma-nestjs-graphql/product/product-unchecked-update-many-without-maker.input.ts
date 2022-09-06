import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';
import { ProductCreateOrConnectWithoutMakerInput } from './product-create-or-connect-without-maker.input';
import { ProductUpsertWithWhereUniqueWithoutMakerInput } from './product-upsert-with-where-unique-without-maker.input';
import { ProductCreateManyMakerInputEnvelope } from './product-create-many-maker-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutMakerInput } from './product-update-with-where-unique-without-maker.input';
import { ProductUpdateManyWithWhereWithoutMakerInput } from './product-update-many-with-where-without-maker.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutMakerInput {

    @Field(() => [ProductCreateWithoutMakerInput], {nullable:true})
    create?: Array<ProductCreateWithoutMakerInput>;

    @Field(() => [ProductCreateOrConnectWithoutMakerInput], {nullable:true})
    connectOrCreate?: Array<ProductCreateOrConnectWithoutMakerInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutMakerInput], {nullable:true})
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutMakerInput>;

    @Field(() => ProductCreateManyMakerInputEnvelope, {nullable:true})
    createMany?: ProductCreateManyMakerInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    set?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    delete?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    connect?: Array<ProductWhereUniqueInput>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutMakerInput], {nullable:true})
    update?: Array<ProductUpdateWithWhereUniqueWithoutMakerInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutMakerInput], {nullable:true})
    updateMany?: Array<ProductUpdateManyWithWhereWithoutMakerInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProductScalarWhereInput>;
}
