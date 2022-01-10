import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "../components/Todo";
import { add } from "../store";

const Home = () => {
  const [text, setText] = useState("");

  const { todos } = useSelector((state) => ({
    todos: state,
  }));

  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(add(text));
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input value={text} type="text" onChange={onChange}></input>
        <button>add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
