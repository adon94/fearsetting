import { combineReducers } from 'redux';
import worstThings from './worstThings';
import navigation from './navigation';
import benefits from './benefits';
import costs from './costs';
import decision from './decision';

export default combineReducers({
  navigation,
  worstThings,
  benefits,
  costs,
  decision,
});
