const initialState = [{
  id: 1,
  cost: '',
}];

const costs = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COST':
      return [
        ...state,
        {
          id: action.id,
          cost: '',
        },
      ];
    case 'EDIT_COST':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.cost = action.item.cost;
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
