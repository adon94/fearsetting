const initialState = [{
  id: 1,
  benefit: '',
}];

const benefits = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BENEFIT':
      return [
        ...state,
        {
          id: action.id,
          benefit: '',
        },
      ];
    case 'EDIT_BENEFIT':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.benefit = action.item.benefit;
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
export default benefits;
