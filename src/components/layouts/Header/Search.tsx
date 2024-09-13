import React, { useState } from 'react';
import { SearchSVG } from '../../../assets/icons';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [search, setSearch] = useState<string>();

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div className="container-search">
      <input
        type="text"
        id="txt-search"
        name="txt-search"
        placeholder="Search"
        value={search}
        onChange={handleChangeSearch}
      />
      <SearchSVG />
    </div>
  );
};

export default Search;
