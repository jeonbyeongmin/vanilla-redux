import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

const Home = ({ todos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
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

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(actionCreators.addTodo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
