import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import { Room } from './room.schema';

const ROOM = {
  id: '1',
  name: 'Room 1',
  images: [
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  ],
  rating: 4,
  apartment_type: 'Entire apartment',
  is_super_host: true,
  beds: 1,
  bedrooms: 1,
  bathrooms: 1,
  guests: 1,
  price: 100,
  description: 'This is a description',
  cancellable: true,
  has_tv: true,
  has_kitchen: true,
  has_airconditioning: true,
  has_wifi: true,
  has_free_parking_area: true,
};

@Resolver(Room)
export class RoomResolver {
  @Query(() => [Room])
  async rooms(): Promise<Room[]> {
    return [ROOM];
  }

  @Query(() => Room)
  async room(@Arg('id') id: number): Promise<Room> {
    return ROOM;
  }
}
