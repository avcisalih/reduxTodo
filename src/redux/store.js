/**
 ! store oluşturma işlemi:
 1. redux kütüphanesinden "createStore" metodu import edilir.
 2.store içerisinde tutulacak olan verilerin herbiri için reducer oluşturulur.
 3. oluşturulan reducerlar combineReducers ile birleştirilir.
 4. store'a oluşturulan reducerlar tanıtılır. 
 */
import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

//birden fazla reducer varsa bunlaru birleştirmek gerekir:
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

//store oluştur.
const store = createStore(rootReducer);

export default store;
