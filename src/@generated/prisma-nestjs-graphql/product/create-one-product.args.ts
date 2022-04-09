import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCreateInput } from './product-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductArgs {
  @Field(() => ProductCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => ProductCreateInput)
  data!: ProductCreateInput;
}
