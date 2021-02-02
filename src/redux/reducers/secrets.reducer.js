const secretsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SECRETS':
      return action.payload;
    case 'UNSET_SECRETS':
      return [];
    default:
      return state;
  }
};

export default secretsReducer;
