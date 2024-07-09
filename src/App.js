import React, { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
    console.log(toDo);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    console.log(toDos);
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...toDos]);
  };
  return (
    <>
      <h1>To Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write ur to do"
        />
        <button type="submit">Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
