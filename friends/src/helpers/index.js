export const setLoading = (state, setUserInput) => {
  setUserInput({ ...state, loading: true });
};

export const setError = (state, setUserInput) => {
  setUserInput({ ...state, error: "That wasn't correct. Try again?" });
};
