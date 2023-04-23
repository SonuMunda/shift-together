import React from "react";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plan1 from "./Pages/Plans/Plan1";
import Plan2 from "./Pages/Plans/Plan2";
import Plan3 from "./Pages/Plans/Plan3";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Helpline from "./Pages/Helpline/Helpline";
import PlanCard from "./components/Plans Card/PlanCard";
import FacilitiesCard from "./components/Facilities Card/FacilitiesCard";
import ErrorPage from "./Pages/Error Page/ErrorPage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                PlanCard={<PlanCard />}
                FacilitiesCard={<FacilitiesCard />}
              />
            }
          />
          <Route path="/1bhk" element={<Plan1 />} />
          <Route path="/2bhk" element={<Plan2 />} />
          <Route path="/3bhk" element={<Plan3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
