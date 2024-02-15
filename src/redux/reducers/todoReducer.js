/*
!reducer

*store'un nasıl değişeceğine karar verir.
*reducer normal bir fonksiyondur.
*iki parametre alır:
 -state: store'da tutulan verinin son durumu.
 -action: verilerin nasıl değişeceğini belirten obje.

 * state tanımsız olduğu zaman redux hata verir. Bu hatanın çnüne geçmek için state bir başlangıç değeri vermeliyiz. Bu başlangıç değeri biz state'i güncelleyene kadar aktif olur.

 ! Önemli:
 Reducer fonksiyonundan return edilen veri store'un son hali olur

*/

import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //type'ı add_todo olan aksiyon tetiklenirse burası çalışır
    case ActionTypes.ADD:
      //yeni todoyu eskilerin arasında ekle
      const tempTodos = state.todos.concat(action.payload);

      //state günceller
      return {
        todos: tempTodos,
      };
    // type'ı delete olan aksiyon tetiklenirse burası çalışır
    case ActionTypes.DELETE:
      //diziden silineek olanı kaldır
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);

      // reducer'da tutulan verinin son değerini belirle
      return { todos: filtred };

    //type update olanı aksiyon tetiklenirse
    case ActionTypes.UPDATE:
      //1. Dizideki eski todo ile action un payloadı ile gelen todoyu yer değiştir
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      // reducer da tutulan todos u güncelle
      return { todos: updated };

    default:
      return state;
  }
};

export default todoReducer;
