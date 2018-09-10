import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/AppNavigator';

const initialAction = RootNavigator.router.getActionForPathAndParams('Define');
const initialNavState = RootNavigator.router.getStateForAction(initialAction);

function navigation(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Define':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Define' }),
        state,
      );
      break;
    case 'Worst':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Worst' }),
        state,
      );
      break;
    case 'Prevent':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Prevent' }),
        state,
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export default navigation;