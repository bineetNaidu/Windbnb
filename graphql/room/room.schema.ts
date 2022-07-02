import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Host } from '../hosts/host.schema';

@ObjectType()
export class Room {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => [String])
  images!: string[];

  @Field(() => String)
  apartmentType!: string;

  @Field(() => String)
  location!: string;

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
  hasTv!: boolean;

  @Field(() => Boolean)
  hasKitchen!: boolean;

  @Field(() => Boolean)
  hasAirconditioning!: boolean;

  @Field(() => Boolean)
  hasWifi!: boolean;

  @Field(() => Boolean)
  hasFreeParking!: boolean;

  @Field(() => String)
  createdAt!: Date;

  @Field(() => String)
  updatedAt!: Date;

  @Field(() => Host, { nullable: true })
  host?: Host;
}
