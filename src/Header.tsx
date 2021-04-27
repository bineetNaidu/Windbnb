import Logo from './favicon.svg';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="" />
        {/* logo */}
        <h1>Windbnb</h1>
      </div>

      <div className="header__searchBar">
        <input type="text" placeholder="Stolkholm, Sweden" alt="location" />
        <input type="number" placeholder="Add Guess" />
      </div>
    </div>
  );
};
