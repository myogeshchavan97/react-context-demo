/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import UsersList from './UsersList';
import Header from './Header';
import Filters from './Filters';
import UserContext from '../context/UserContext';

const HomePage = (props) => {
  const [users, setUsers] = useState(props.users);
  const [sortOrder, setSortOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  // call api to get list of users
  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadUsers());

    // initialize debounce function to search once user has stopped typing every half second
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.users.length > 0) {
      setUsers(props.users);
      setIsLoading(false);
    }
  }, [props.users]);

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.users.filter((user) =>
        user.country.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = props.users;
    }
    setUsers(filtered);
    setSortOrder('');
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      setUsers(_.orderBy(users, ['age'], [sortOrder.value]));
    }
  }

  return (
    <UserContext.Provider value={{ users, sortOrder, isLoading }}>
      <Header handleSearch={handleSearch} />
      <Filters handleSort={handleSort} />
      <UsersList />
    </UserContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(HomePage);
