const loadingReducer = (prevState = false, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return prevState;
  }
};

const searchReducer = (prevState = "", action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return prevState;
  }
};

const searchResultReducer = (prevState = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULT":
      return action.payload;
    default:
      return prevState;
  }
};

const articleReducer = (prevState = {}, action) => {
  switch (action.type) {
    case "SET_ARTICLE":
      return action.payload;
    default:
      return prevState;
  }
};

export { searchReducer, searchResultReducer, loadingReducer , articleReducer};
