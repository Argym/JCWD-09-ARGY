import { Routes, Route } from "react-router-dom";
import LearnHOC from "./pages/LearnHOC";
import 

function App() {
  const Button = (props) => <button style={props.style}>Click Me</button>;
  const Text = (props) => <p style={props.style}>Click Me</p>;

  const StyleButton = LearnHOC(Button);
  const StyledText = LearnHOC(Text);
  return (
    <div className="App">
      {/* <StyleButton />
      <StyledText /> */}
      <Routes>
        <Route path="/" element={<LearnHOC />} />
      </Routes>
    </div>
  );
}

export default App;
