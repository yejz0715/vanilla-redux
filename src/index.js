import { legacy_createStore as createStore } from "redux";
//redux

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//state: app에서 바뀌는 data
//reducer
const countModifier = (state = 0) => {
  //state 초기화
  return state; //app에 있는 data
};
const countStore = createStore(countModifier); //store:data넣을 수 있는 장소-> 생성

console.log(countStore.getState()); //0
//스토어가 갖고있는 내장함수:dispatch,subscribe, getState,replaceReducer

/* vanilla javascript
아래의 내용의 목적은 count를 수정하기 위해(+하거나, -하거나)
html에게 뭔가가 바뀌었다고 알려주기위해 함수(업데이트)를 쓴다는것이.. 리덕스를 쓰는 이유중 하나


let count = 0; //=state /app에서 유일하게 바뀌는 코드
number.innerText = count;

//html에게 count를 업데이트 하라고 알려줘야 함
//클릭할때마다 업데이트하는 함수를 만들어야함
const updateText = () => {
  //innerText=count

  number.innerText = count;
};

const handleAdd = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
  updateText();
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
*/
