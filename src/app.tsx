import { Header } from './Header';
import { Room } from './Room';
import './app.css';

export function App() {
  return (
    <div className="MainApp">
      <Header />

      <section className="container">
        <article className="container__header">
          <span>Stay in Finland</span>
          <span>12+ stays</span>
        </article>
      </section>

      <section className="row">
        <Room
          img_url="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          rating={5}
          room_desc="Feels Like Summer in the Air"
          isSuperhost
          number_of_beds={2}
          room_details={'private room'}
        />
        <Room
          img_url="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          rating={5}
          room_desc="Feels Like Summer in the Air"
          isSuperhost
          number_of_beds={2}
          room_details={'private room'}
        />
        <Room
          img_url="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          rating={5}
          room_desc="Feels Like Summer in the Air"
          isSuperhost
          number_of_beds={2}
          room_details={'private room'}
        />
        <Room
          img_url="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          rating={5}
          room_desc="Feels Like Summer in the Air"
          isSuperhost
          number_of_beds={2}
          room_details={'private room'}
        />
        <Room
          img_url="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          rating={5}
          room_desc="Feels Like Summer in the Air"
          isSuperhost
          number_of_beds={2}
          room_details={'private room'}
        />
        <Room
          img_url="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          rating={5}
          room_desc="Feels Like Summer in the Air"
          isSuperhost
          number_of_beds={2}
          room_details={'private room'}
        />
      </section>
    </div>
  );
}
