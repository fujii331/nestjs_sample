import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyMakerInput } from './product-create-many-maker.input';

@InputType()
export class ProductCreateManyMakerInputEnvelope {
  @Field(() => [ProductCreateManyMakerInput], { nullable: false })
  data!: Array<ProductCreateManyMakerInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
