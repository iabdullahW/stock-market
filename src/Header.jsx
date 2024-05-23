// src/Header.jsx


const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-blue-500">
      <h1 className="text-2xl text-white">Stock Tracker</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded"
        onKeyDown={handleSearch}
      />
    </header>
  );
};

export default Header;
