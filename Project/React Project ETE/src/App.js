import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import QueriesHome from "./components/QueriesHome";
import QueriesEdit from "./components/QueriesEdit";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact  path='/qh' element={<QueriesHome />} />
          <Route exact  path='/edit' element={<QueriesEdit />} />
        

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
