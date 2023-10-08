import { Button } from 'react-bootstrap';

const SearchForm = ({ onChange, value, search }) => {
  return (
    <form onSubmit={search}>
      <input onChange={onChange} value={value} type="text" name="query" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
