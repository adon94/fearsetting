const initialState = [{
  id: 1,
  text: '',
}];

const benefits = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BENEFIT':
      return [
        ...state,
        {
          id: action.id,
          text: '',
        },
      ];
    case 'EDIT_BENEFIT':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.text = action.item.text;
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
