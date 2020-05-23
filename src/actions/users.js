import axios from 'axios';

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('./users.json');
      return dispatch(setUsers(users.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});
