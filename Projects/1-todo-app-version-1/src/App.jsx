import AddTodo from "./components/AddTodo";
import MyAppName from "./components/MyAppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <MyAppName></MyAppName>
      <AddTodo></AddTodo>
      <div class="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
