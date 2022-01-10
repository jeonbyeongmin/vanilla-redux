import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const Todo = ({ text, onButtonClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onButtonClick}>DEL</button>
      </Link>
    </li>
  );
};

const mapStateToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
};

export default connect(null, mapStateToProps)(Todo);
