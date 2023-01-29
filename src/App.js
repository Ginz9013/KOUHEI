/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import DesignWorks from "./pages/DesignWorks";
import WebWorks from "./pages/WebWorks";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";

import { DesignProvider } from "./context/DesignContext";
import { WebProvider } from "./context/WebContext";

function App() {
  return (
    <Router>
      <header className="absolute h-screen w-20vw z-10">
        <Navbar />
      </header>
      <main className="absolute left-20vw w-80vw h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/DesignWorks"
            element={
              <DesignProvider>
                <DesignWorks />
              </DesignProvider>
            }
          ></Route>
          <Route
            path="/WebWorks"
            element={
              <WebProvider>
                <WebWorks />
              </WebProvider>
            }
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ContactMe" element={<ContactMe />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
