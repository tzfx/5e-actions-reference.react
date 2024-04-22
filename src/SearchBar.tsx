import { useState } from "react";

type Props = {
  handleSearch: (search: string) => void;
};

const SearchBar = ({ handleSearch }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        id="searchbar"
        type="text"
        value={search}
        onChange={(event) => {
          const { value } = event.target;
          setSearch(value);
          handleSearch(value);
        }}
      ></input>
      <label htmlFor="searchbar">🔎</label>
    </>
  );
};

export default SearchBar;
