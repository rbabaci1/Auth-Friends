export const setLoading = (state, setUserInput) => {
  setUserInput({ ...state, loading: true });
};

export const setLoggedIn = (state, setUserInput) => {
  setUserInput({ ...state, isLoggedIn: true });
};

export const setError = (state, setUserInput) => {
  setUserInput({ ...state, error: 'Username or Password not valid!' });
};
