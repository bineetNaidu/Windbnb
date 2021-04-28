import { FunctionComponent } from 'preact';
import './Room.css';

interface Props {
  isSuperhost?: boolean;
  rating: number;
  number_of_beds?: number;
  room_details?: string;
  room_desc: string;
  img_url: string;
}

export const Room: FunctionComponent<Props> = ({
  rating,
  room_desc,
  isSuperhost,
  number_of_beds,
  room_details,
  img_url,
}) => {
  return (
    <div className="room">
      <img src={img_url} alt="room picture" />

      <div className="room__metaData">
        <div className="data__">
          {isSuperhost && <span className="room__superHost">SUPER HOST</span>}

          <span>{room_details}</span>

          <span>{number_of_beds}</span>
        </div>

        <span className="room__rating">{rating}</span>
      </div>

      <h4 className="room__desc">{room_desc}</h4>
    </div>
  );
};
