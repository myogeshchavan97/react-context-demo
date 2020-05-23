import React from 'react';
import Select from 'react-select';
import UserContext from '../context/UserContext';

const Filters = ({ handleSort }) => {
  const options = [
    { value: '', label: 'None' },
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ];

  return (
    <UserContext.Consumer>
      {({ sortOrder }) => (
        <div className="sortBy">
          Sort by age
          <Select
            value={sortOrder}
            className="select-filter"
            onChange={handleSort}
            options={options}
          />
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Filters;
