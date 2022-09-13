import { NavLink } from 'react-router-dom';
import { Header, Nav } from './Navigation.styled';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: 24px;
  color: black;
  &:not(:last-child) {
    margin-right: 32px;
  }
  &:hover {
    color: #ff00ff;
  }
  &.active {
    border-bottom: 3px solid #ff00ff;
    border-radius: 3px;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movie">Movies</StyledLink>
      </Nav>
    </Header>
  );
};

export default Navigation;
