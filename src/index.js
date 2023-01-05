const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  //innerText=count
  //클릭할때마다 함수를 만들어야함
  number.innerText = count;
  //html에게 뭔가가 바뀌었다고 알려주기위해 함수를 쓴다는것이.. 리덕스를 쓰는 이유중 하나
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
