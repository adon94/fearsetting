// const store = {
//   decision: 'String',
//   worstThings: [
//     {
//       id: '',
//       define: '',
//       prevent: '',
//       repair: '',
//     },
//   ],
// }

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
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.define = action.item.define;
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...newItem,
        };
      });
    case 'EDIT_PREVENT':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.prevent = action.item.prevent;
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...newItem,
        };
      });
    case 'EDIT_REPAIR':
      return state.map((item) => {
        if (item.id !== action.item.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        const newItem = item;
        newItem.repair = action.item.repair;
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
export default worstThings;
