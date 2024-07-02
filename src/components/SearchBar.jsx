const SearchBar = ({ setInputValue }) => {
  return (
    <>
      <input
        type="text"
        className="border-2 rounded-md flex"
        placeholder="Rechercher"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
};
export default SearchBar;
