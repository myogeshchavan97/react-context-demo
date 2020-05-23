import React from 'react';
import Select from 'react-select';

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: '', label: 'None' },
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ];

  return (
    <div className="sortBy">
      Sort by age
      <Select
        value={sortOrder}
        className="select-filter"
        onChange={handleSort}
        options={options}
      />
    </div>
  );
};

export default Filters;
