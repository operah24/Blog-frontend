export const initialState = {
  loading: false,
  isAuth: false,
  user: {},
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
      case "login_successful":
      case "register_successful":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.user,
          };
      case "fetchUser_successful":
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.user,
      };
      case "login_fail":
      case "register_fail":
      case "logout":
      case "fetchUser_fail":
        return {
        ...state,
        loading: false,
        isAuth: false,
        user: {},
      };

    default:
      return state;
  }
};
