import { InputType, Field, Float } from 'type-graphql';

@InputType()
export class CreateHostInput {
  @Field()
  name!: string;

  @Field()
  avatar_url!: string;

  @Field()
  email!: string;

  @Field(() => Float)
  phoneNumber!: number;

  @Field()
  country!: string;
}
