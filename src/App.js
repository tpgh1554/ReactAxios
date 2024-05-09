import logo from "./logo.svg";
import "./App.css";
// import Axios from "./Axios";
// import News from "./News";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./UserStore";
import ImageUploader from "./pages/ImageUploader";

function App() {
  return (
    <>
      {/* <Axios /> */}
      {/* <News /> */}
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<ImageUploader />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
