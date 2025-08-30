export default function Header({ search, setSearch }) {
  return (
    <header className="header">
      <h1 className="header__title">Super Todo List</h1>
      <div className="header__search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="header__search-input"
          type="text"
          placeholder="Search todo..."
        />
        {search.length ? (
          <img
            onClick={() => setSearch("")}
            className="header__search-delete"
            src="/delete.svg"
            alt="clear"
          />
        ) : null}
      </div>
    </header>
  );
}
