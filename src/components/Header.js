import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title">User Search App</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search users by country"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default HeaderPage;
