import React, { useContext } from 'react';
import Select from 'react-select';
import UserContext from '../context/UserContext';

const Filters = ({ handleSort }) => {
  const { sortOrder } = useContext(UserContext);
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
