import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tutor from "./pages/Tutoring";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const App: React.FC = () => {
  const [SBStatus, setSBStatus] = useState<boolean>(false);
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    let color;
    isDarkTheme
      ? (color = "#222121")
      : (color = "linear-gradient(0.25turn, #0b7aad, #7efce7, #1251c7)");
    document.getElementById("root")!.style.background = color;
  }, [isDarkTheme]);

  return (
    <div className="main-container">
      <BrowserRouter>
        <Navbar
          status={SBStatus}
          setStatus={setSBStatus}
          setColor={setDarkTheme}
          isDark={isDarkTheme}
        />
        <ScrollToTop>
          <div className="main-body">
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/tutoring" exact component={Tutor} />
          </div>
        </ScrollToTop>
        <div className="main-footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
