const initialState = [{
  id: 1,
  text: '',
}];

const costs = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COST':
      return [
        ...state,
        {
          id: action.id,
          text: '',
        },
      ];
    case 'EDIT_COST':
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.text = action.payload.text;
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...newItem,
        };
      });
    default:
      return state;
  }
};
export default costs;
