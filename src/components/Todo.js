import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const Todo = ({ text, onButtonClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onButtonClick}>DEL</button>
    </li>
  );
};

const mapStateToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => dispatch(remove(ownProps.id)),
  };
};

export default connect(null, mapStateToProps)(Todo);
