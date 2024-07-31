import "./App.css";
import Todo from "./Todo";
function App() {
  return (
    <>
      <h1>Goal Reset</h1>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
    </>
  );
}

export default App;
