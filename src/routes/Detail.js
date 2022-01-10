import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ todos }) => {
  const { id } = useParams();

  const todo = todos.find((todo) => {
    return todo.id === parseInt(id);
  });

  return (
    <h1>
      <h1>Detail</h1>
      <p>id : {todo?.id}</p>
      <p>text : {todo?.text}</p>
    </h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};
export default connect(mapStateToProps)(Detail);
