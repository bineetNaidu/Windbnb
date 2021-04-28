import { Header } from './Header';
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
    </div>
  );
}
