import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderEntryUpdateManyMutationInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
