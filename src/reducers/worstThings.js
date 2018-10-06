const initialState = [{
  id: 1,
  define: '',
  prevent: '',
  repair: '',
}];

const worstThings = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_THING':
      return [
        ...state,
        {
          id: action.id,
          define: '',
          prevent: '',
          repair: '',
        },
      ];
    case 'EDIT_THING':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          return item;
        }
        const newItem = item;
        newItem.define = action.item.define;
        return {
          ...item,
          ...newItem,
        };
      });
    case 'REMOVE_THING':
      return state.filter(item => item.id !== action.id);
    case 'EDIT_PREVENT':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          return item;
        }
        const newItem = item;
        newItem.prevent = action.item.prevent;
        return {
          ...item,
          ...newItem,
        };
      });
    case 'EDIT_REPAIR':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          return item;
        }
        const newItem = item;
        newItem.repair = action.item.repair;
        return {
          ...item,
          ...newItem,
        };
      });
    default:
      return state;
  }
};
export default worstThings;
