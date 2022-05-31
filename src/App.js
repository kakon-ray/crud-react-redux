import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import UpdateDetails from "./component/UpdateDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="update/:id" element={<UpdateDetails />} />
      </Routes>
    </div>
  );
}

export default App;
