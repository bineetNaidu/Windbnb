import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateHostInput {
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
}
