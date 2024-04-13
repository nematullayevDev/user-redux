import { composeWithDevTools } from "@redux-devtools/extension";
import { usersReducer } from "./usersReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
});
 
export const store = createStore(rootReducer, composeWithDevTools());
