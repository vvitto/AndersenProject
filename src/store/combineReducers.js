import { combineReducers } from 'redux';
import { locationsReducer } from '../reducers/locationReducer';
import { realtyReducer } from '../reducers/realtyReducer';
import { propertyReducer } from '../reducers/PropertyReducer';

const rootReducer = combineReducers({
  locations: locationsReducer,
  realty: realtyReducer,
  property: propertyReducer
});

export default rootReducer;
