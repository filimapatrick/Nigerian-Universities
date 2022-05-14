import { ActionType } from "./ActionType"

export const UniversityAction =(universities)=> {
return{
    type: ActionType.SET_UNIVERSITY,
    payload: universities,
}
}


export const selectedProduct = (university) => {
    return {
      type:  ActionType.SELECT_UNIVERSITY,
      payload: university,
    };
  };