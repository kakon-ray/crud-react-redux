import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
