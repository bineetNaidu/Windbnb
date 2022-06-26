import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export class Room {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => [String])
  images!: string[];

  @Field(() => Int)
  rating!: number;

  @Field(() => String)
  apartment_type!: string;

  @Field(() => Boolean)
  is_super_host!: boolean;

  @Field(() => Int)
  beds!: number;

  @Field(() => Int)
  bedrooms!: number;

  @Field(() => Int)
  bathrooms!: number;

  @Field(() => Int)
  guests!: number;

  @Field(() => Int)
  price!: number;

  @Field(() => String)
  description!: string;

  @Field(() => Boolean)
  cancellable!: boolean;

  @Field(() => Boolean)
  has_tv!: boolean;

  @Field(() => Boolean)
  has_kitchen!: boolean;

  @Field(() => Boolean)
  has_airconditioning!: boolean;

  @Field(() => Boolean)
  has_wifi!: boolean;

  @Field(() => Boolean)
  has_free_parking_area!: boolean;
}
