import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class LoginUserArgs {
  @Field()
  idToken: string;
}
