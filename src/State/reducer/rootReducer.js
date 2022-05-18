import { combineReducers } from "redux";
import {
  articleReducer,
  loadingReducer,
  searchReducer,
  searchResultReducer,
} from "./reducers";

const rootReducer = combineReducers({
  search: searchReducer,
  searchResult: searchResultReducer,
  loading: loadingReducer,
  article: articleReducer,
});

export default rootReducer;
