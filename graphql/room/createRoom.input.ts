import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateRoomInput {
  @Field(() => String)
  name!: string;

  @Field(() => [String])
  images!: string[];

  @Field(() => Int)
  rating!: number;

  @Field(() => String)
  apartmentType!: string;

  @Field(() => String)
  location!: string;

  @Field(() => Boolean)
  isSuperhost!: boolean;

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

  @Field(() => Boolean, { nullable: true })
  cancellable?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasTv?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasKitchen?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasAirconditioning?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasWifi?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasFreeParking?: boolean;

  @Field()
  hostEmail!: string;
}
