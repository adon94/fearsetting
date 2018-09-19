import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Decision from '../screens/Decision';
import Prevent from '../screens/Prevent';
import Define from '../screens/Define';
import Repair from '../screens/Repair';
import Preview from '../screens/Preview';
import Benefits from '../screens/Benefits';
import Costs from '../screens/Costs';
import Summary from '../screens/Summary';
import Menu from '../screens/Menu';
import SwipeNav from '../components/SwipeNav';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
);

const RootNavigator = createStackNavigator(
  {
    Decision: { screen: Decision },
    Prevent: { screen: Prevent },
    Define: { screen: Define },
    Repair: { screen: Repair },
    Preview: { screen: Preview },
    Benefits: { screen: Benefits },
    Costs: { screen: Costs },
    Summary: { screen: Summary },
    Menu: { screen: Menu },
    SwipeNav: { screen: SwipeNav },
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#FFFFFF',
      paddingTop: 50,
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
