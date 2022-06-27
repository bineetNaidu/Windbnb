import { PrismaClient } from '@prisma/client';
import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import { CreateHostInput } from './createHost.input';
import { Host } from './host.schema';

const prisma = new PrismaClient();

@Resolver((of) => Host)
export class HostResolver {
  @Query((returns) => Host, { nullable: true })
  async host(@Arg('email') email: string): Promise<Host | null> {
    return prisma.host.findUnique({
      where: {
        email,
      },
      include: {
        rooms: true,
      },
    });
  }

  @Mutation((returns) => Host)
  async createHost(@Arg('data') data: CreateHostInput): Promise<Host> {
    return prisma.host.create({
      data,
    });
  }
}
