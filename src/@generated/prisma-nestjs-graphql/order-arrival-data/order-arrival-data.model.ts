import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeliveryPort } from '../prisma/delivery-port.enum';
import { HideField } from '@nestjs/graphql';
import { Product } from '../product/product.model';

@ObjectType()
export class OrderArrivalData {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  prodCd!: string;

  @Field(() => Int, { nullable: false })
  orderQuantity!: number;

  @Field(() => Date, { nullable: true })
  deliveryDate!: Date | null;

  @Field(() => DeliveryPort, { nullable: false, defaultValue: 'OTHER' })
  deliveryPort!: keyof typeof DeliveryPort;

  @HideField()
  createdAt!: Date;

  @HideField()
  updatedAt!: Date;

  @Field(() => Product, { nullable: false })
  product?: Product;
}
