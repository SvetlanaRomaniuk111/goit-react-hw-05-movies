const SearchForm = ({ onChange, value, search }) => {
  return (
    <form onSubmit={search}>
      <input onChange={onChange} value={value} type="text" name="query" />
      <button type="submit" className="btn btn-secondary m-3">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
