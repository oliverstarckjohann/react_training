import React, { useState } from "react";
import styled from "styled-components/macro";

const TaskBoard = styled.div`
  font-family: sans-serif;
  width: 180px;
  background-color: #fbf6b9;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

let taskBoardData = [{ data: "home" }, { data: "outside" }];

function App() {
  const [todos, setTodos] = useState(taskBoardData);

  todos.forEach((todo) => console.log(`${todo.data}` + " from foreach"));
  todos.map((todo) => console.log(`${todo.data}` + " from map"));

  return (
    <>
      <TaskBoard className="App">
        <h2>Content from Object:</h2>
        {todos.map((todo) => (
          <p>{todo.data} maped from useState</p>
        ))}
        <p>{todos[0].data} direct from object accessed</p>
        <p>{todos[1].data} direct from object accessed</p>
      </TaskBoard>
    </>
  );
}

export default App;
