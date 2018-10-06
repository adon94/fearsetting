const initialState = {
  text: '',
};

const benefits = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_DECISION':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default benefits;
