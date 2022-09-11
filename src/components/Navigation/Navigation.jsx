import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movie">Search Movie</NavLink>
    </header>
  );
};

export default Navigation;
