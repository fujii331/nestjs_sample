import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { MakerUpdateOneRequiredWithoutOrderEntryInput } from '../maker/maker-update-one-required-without-order-entry.input';

@InputType()
export class OrderEntryUpdateWithoutOrderRequestInput {
  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => MakerUpdateOneRequiredWithoutOrderEntryInput, { nullable: true })
  maker?: MakerUpdateOneRequiredWithoutOrderEntryInput;
}
