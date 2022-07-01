import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Room } from '../lib/graphql';

interface PropertyCardProps {
  room: Omit<Room, 'host'>;
}

const PropertyCard: FC<PropertyCardProps> = ({ room }) => {
  return (
    <Link href={`/rooms/${room.id}`}>
      <article className="rounded-xl flex flex-col group cursor-pointer">
        <div className="flex-auto z-10">
          <Image
            src={room.images[0]}
            alt={room.name}
            width={'100%'}
            height={'100%'}
            className="rounded-xl group-hover:scale-110 transition-all z-0"
            layout="responsive"
          />
        </div>
        <address className="not-italic">
          <h3 className="font-bold">{room.name}</h3>
          <p className="font-light text-gray-700">{room.location}</p>
          <p>
            ${room.price}{' '}
            <span className="font-light text-gray-700">/nights</span>{' '}
          </p>
        </address>
      </article>
    </Link>
  );
};

export { PropertyCard };
