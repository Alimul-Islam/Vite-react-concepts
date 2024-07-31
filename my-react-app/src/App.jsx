import "./App.css";
import User from "./User";
import Posts from "./Posts";

function App() {
  const clickHandler = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <Posts></Posts>
      {/* <User></User> */}
      {/* <button onClick={clickHandler}>Click me</button> */}
    </>
  );
}

export default App;
