import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { EnumAuthorityFieldUpdateOperationsInput } from '../prisma/enum-authority-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @HideField()
  hashedRefreshToken?: NullableStringFieldUpdateOperationsInput;

  @Field(() => EnumAuthorityFieldUpdateOperationsInput, { nullable: true })
  authority?: EnumAuthorityFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
