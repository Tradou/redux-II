import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  count: state,
});

const CountComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: "ADD" })}> +1 </button>
    <button onClick={() => dispatch({ type: "REMOVE" })}> -1 </button>
  </div>
);

export default connect(mapStateToProps)(CountComponent);
