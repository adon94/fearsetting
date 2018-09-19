const initialState = {
  text: '',
};

const benefits = (state = initialState, action) => {
  console.log(action);
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
