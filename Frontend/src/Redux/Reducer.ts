import { LOGIN_SUCCESSFUL } from "./ActionType";

let token=localStorage.getItem("token") || "";

let userData: any = JSON.parse(localStorage.getItem("user") || "{}");

type ActionType = string;

interface Action {
  type: ActionType;
  payload: any;
}


interface InitialStateType {
  user: any; 
  isAuth: boolean;
}

const initialState: InitialStateType = {
  user: userData? userData : "", 
  isAuth: token ? true : false,
};


export const reducer = (state: InitialStateType = initialState, action: Action): InitialStateType => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {...state, user: action.payload, isAuth: true };
    default:
      return state;
  }
};
