import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import component
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import NavBar from "./Component/NavBar";
//import loading
import FadeLoader from "react-spinners/FadeLoader";
//import app.css
import './StyledComponent/App.css';
import Footer from "./Component/Footer";

function App() {
  //loading
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader">
          <FadeLoader
          color="#f87765"
          height={27}
          margin={11}
          speedMultiplier={1}
          width={8}
        />
        </div>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
