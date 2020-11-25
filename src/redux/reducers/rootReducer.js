import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer";

const rootReducer = combineReducers({
  movieslist: MoviesReducer
});

export default rootReducer;
