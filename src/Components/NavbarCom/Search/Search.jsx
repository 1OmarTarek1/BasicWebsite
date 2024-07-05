import './Search.css';

const Search = ({ id, cla, searchValue, setSearchValue }) => {

    return (
        <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            placeholder="Search..."
            className={cla}
            id={id}
        />
    );
}

export default Search;
