import { Routes, Route } from "react-router-dom";
import LearnHOC from "./pages/LearnHOC";

function App() {
  const Button = (props) => <button style={props.style}>Click Me</button>;
  const Text = (props) => <p style={props.style}>Hello</p>;

  const StyleButton = LearnHOC(Button);
  const StyledText = LearnHOC(Text);
  return (
    <div className="App">
      <StyleButton />
      <StyledText />

      <h1>Hello, world!</h1>
      <p>This is some example text.</p>
    </div>
  );
}

export default App;
