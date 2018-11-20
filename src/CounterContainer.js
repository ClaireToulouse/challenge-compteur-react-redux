import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  add1Action: () => dispatch({ type: "ADD1" }),
  add10Action: () => dispatch({ type: "ADD10" }),
  remove1Action: () => dispatch({ type : "REMOVE1"}),
  remove10Action: () => dispatch({ type : "REMOVE10"}),
  resetAction: () => dispatch({ type : "RESET"})
});

const add1Action = {
  type: 'ADD1',
};
const add10Action = {
  type: 'ADD10',
};

const remove1Action = {
  type: 'REMOVE1',
};
const remove10Action = {
  type: 'REMOVE10',
};
const resetAction = {
  type: 'RESET',
};


const CounterComponent = ({ counter, add1Action, remove1Action, add10Action, remove10Action,resetAction }) => (
  <div>
    <p>{counter}</p>
    <button onClick={add1Action}>+ 1</button>
    <button onClick={add10Action}>+ 10</button>
    <button onClick={remove1Action}> - 1</button>
    <button onClick={remove10Action}> - 10</button>
    <button onClick={resetAction}> reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);