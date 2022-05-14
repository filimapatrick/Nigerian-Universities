import { combineReducers } from "redux";
import {UniversitiesReducer,UniversityReducer} from './Reducers/UniversityReducer'


const reducers = combineReducers({
    alluniversities: UniversitiesReducer,
    university: UniversityReducer,
  });
  export default reducers;