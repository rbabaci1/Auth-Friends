export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const friendsReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      console.log(payload);
      return { ...state, friends: payload, loading: false, error: '' };
    case ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default friendsReducer;
