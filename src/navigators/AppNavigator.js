import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Define from '../screens/Define';
import Prevent from '../screens/Prevent';
import Worst from '../screens/Worst';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
);

const RootNavigator = createStackNavigator(
  {
    Define: { screen: Define },
    Prevent: { screen: Prevent },
    Worst: { screen: Worst },
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#FFFFFF',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
  },
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };