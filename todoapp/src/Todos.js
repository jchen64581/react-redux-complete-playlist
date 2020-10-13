import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? ( //check if there is any todo, if yes, display them, (const todoList=todos.length ?(): ()
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p> //if there is no todo, print this message. 
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
