import PropTypes from 'prop-types';
import { Form, SearchbarBlock, FormInput, FormBtn } from './SearchBar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarBlock>
      <Form onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <FormBtn type="submit">Search</FormBtn>
      </Form>
    </SearchbarBlock>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
