import { PrismaClient } from '@prisma/client';
import { Resolver, Mutation, Query, Arg, Ctx } from 'type-graphql';
import { CreateHostInput } from './createHost.input';
import { Host } from './host.schema';
import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

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
  async createHost(
    @Arg('data') data: CreateHostInput,
    @Ctx() ctx: { req: NextApiRequest; res: NextApiResponse }
  ): Promise<Host> {
    const session = getSession(ctx.req, ctx.res);
    if (!session) {
      throw new Error('You must be logged in to create a host');
    }

    const existingHost = await prisma.host.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingHost) {
      throw new Error('You are already a host');
    }

    const newHost = await prisma.host.create({
      data,
    });

    // fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${session.user}`);

    return newHost;
  }
}
