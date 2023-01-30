import { configureStore } from "@reduxjs/toolkit";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

//action
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//actionFunction(객체를 리턴하기 위)
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = configureStore({ reducer });

store.subscribe(() => console.log(store.getState()));

//action을 dispatch하기 위한 함수
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id); //삭제할 todo의 id 필요하기 때문에(부모노트의 id 필요)
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState(); //store 바뀔때마다 여기에다 모든걸 repainting :1->1/ 2->1,2 3->1,2,3....
  ul.innerHTML = ""; //1->1, 2->2..
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "del";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(paintToDos);

/*
 vanilla-> dispatch() && paintToDos()

const createTodo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li); //appendChild:오로지 node 객체만 자식요소로 추가
};
*/

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  //store.dispatch({type:ADD_TODO, text:toDo }); -> addToDo 함수
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
