import { ActionTypes } from "../actionTypes/actionTypes";

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
