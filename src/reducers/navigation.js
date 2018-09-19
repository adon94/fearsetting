import {
  NavigationActions,
} from 'react-navigation';
import {
  RootNavigator,
} from '../navigators/AppNavigator';

const initialAction = RootNavigator.router.getActionForPathAndParams('Menu');
const initialNavState = RootNavigator.router.getStateForAction(initialAction);

function navigation(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Decision':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Decision',
        }),
        state,
      );
      break;
    case 'Define':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Define',
        }),
        state,
      );
      break;
    case 'Prevent':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Prevent',
        }),
        state,
      );
      break;
    case 'Repair':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Repair',
        }),
        state,
      );
      break;
    case 'Preview':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Preview',
        }),
        state,
      );
      break;
    case 'Benefits':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Benefits',
        }),
        state,
      );
      break;
    case 'Costs':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Costs',
        }),
        state,
      );
      break;
    case 'Summary':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Summary',
        }),
        state,
      );
      break;
    case 'Menu':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Menu',
        }),
        state,
      );
      break;
    case 'SwipeNav':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'SwipeNav',
        }),
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
