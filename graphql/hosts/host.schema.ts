import { ObjectType, Field, Int } from 'type-graphql';
import { Room } from '../room/room.schema';

@ObjectType()
export class Host {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  avatar_url!: string;

  @Field()
  email!: string;

  @Field(() => Int)
  phoneNumber!: number;

  @Field()
  country!: string;

  @Field(() => Boolean)
  isSuperHost!: boolean;

  @Field(() => String)
  createdAt?: Date;

  @Field(() => String)
  updatedAt?: Date;

  @Field(() => [Room])
  rooms?: Room[];
}
