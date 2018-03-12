import { createStore } from "redux";
// import { createStore, combineReducers } from 'redux';
import counter from "./ducks/counter";
// import reducer2 from "./ducks/reducer2";

const store = createStore(counter);
// const store = createStore(
//   combineReducers({
//     counter,
//     reducer2
//   })
// );

export default store;
