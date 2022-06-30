import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import { Room } from './room.schema';
import { PrismaClient } from '@prisma/client';
import { CreateRoomInput } from './createRoom.input';

const prisma = new PrismaClient();

@Resolver(Room)
export class RoomResolver {
  @Query(() => [Room])
  async rooms(): Promise<Room[]> {
    return prisma.room.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  @Query(() => [Room])
  async roomsByHost(@Arg('hostEmail') hostEmail: string): Promise<Room[]> {
    return prisma.room.findMany({
      where: {
        host: {
          email: hostEmail,
        },
      },
      include: {
        host: true,
      },
    });
  }

  @Query(() => Room, { nullable: true })
  async room(@Arg('id') id: number): Promise<Room | null> {
    return prisma.room.findUnique({
      where: {
        id,
      },
      include: {
        host: true,
      },
    });
  }

  @Mutation(() => Room)
  async createRoom(@Arg('data') data: CreateRoomInput): Promise<Room> {
    return prisma.room.create({
      data: {
        ...data,
        host: {
          connect: {
            email: data.hostEmail,
          },
        },
      },
    });
  }

  @Mutation(() => Boolean)
  async deleteRoom(@Arg('id') id: number): Promise<boolean> {
    try {
      await prisma.room.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
