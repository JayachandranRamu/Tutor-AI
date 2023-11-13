



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
  user: null, 
  isAuth: false,
};


export const reducer = (state: InitialStateType = initialState, action: Action): InitialStateType => {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      return { user: action.payload, isAuth: true };
    default:
      return state;
  }
};
