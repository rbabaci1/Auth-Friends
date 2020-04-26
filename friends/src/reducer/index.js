import { friendsInitialState } from '../initialStates';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const friendsReducer = (state = friendsInitialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return { ...state, friends: payload, loading: false, error: '' };
    case ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default friendsReducer;
