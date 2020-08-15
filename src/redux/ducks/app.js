const SET_ERROR_STATE = 'app/SET_ERROR_STATE';

const initialState = {
  errorStatus: false,
};

const setErrorState = () => (
  {
    type: SET_ERROR_STATE,
  }
);

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_STATE:
      return {
        ...state,
        errorStatus: true,
      };
    default:
      return state;
  }
};

export default appReducer;
export { setErrorState };
