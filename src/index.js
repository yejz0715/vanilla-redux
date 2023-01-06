import { legacy_createStore as createStore } from "redux";
//redux

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//스토어가 갖고있는 내장함수:dispatch,subscribe, getState,replaceReducer
//store:data넣을 수 있는 장소
//state: app에서 바뀌는 data
//reducer는 두가지 파라미터를 갖는다(state(현재상태), action(객체,type필수))
//reducer의 return 값은 app의 data
//action을 리듀서로 보내는 방법은 countStore.dispatch();
const countModifier = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};
const countStore = createStore(countModifier); //스토어 생성

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());

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
