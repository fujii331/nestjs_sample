import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Authority } from '../prisma/authority.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  name!: string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(8)
  password!: string;

  @Field(() => Authority, { nullable: true })
  authority?: keyof typeof Authority;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;
}
