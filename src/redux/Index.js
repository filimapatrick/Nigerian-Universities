import { combineReducers } from "redux";
import {UniversitiesReducer,UniversityReducer} from './Reducers/UniversityReducer'


const reducers = combineReducers({
    allUniversities: UniversitiesReducer,
    university: UniversityReducer,
  });
  export default reducers;