
import { ActionType} from '../Action/ActionType';

const initialState = {
    universites: [{
        id:1,
        name:'james',
        occupation:'theive',
        sex:'male'
    }],
}


export const UniversitiesReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_UNIVERSITY:
            return{
                ...state,
                universites:payload

            }
            default:
                return state;
    }
}


export const UniversityReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionType.SELECT_UNIVERSITY:
        return { ...state, university:payload };
        default:
            return state;
     
    }
  };