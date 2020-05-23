const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return [...state, ...action.users];
    default:
      return state;
  }
};

export default usersReducer;
