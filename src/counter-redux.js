import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

// actions type
const ADD = "ADD";
const MINUS = "MINUS";

// reducer : data modifier (current state, action) => return new state
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

// store : data store
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// store function : subscibe
countStore.subscribe(onChange);

const handleAdd = () => {
  // store function : dispatch(object) -- reducer에게 action을 보냄
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
