import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./App.css";
interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  const [SBStatus, setSBStatus] = useState<boolean>(false);
  return (
    <div className="spacer">
      <BrowserRouter>
        <Navbar status={SBStatus} setStatus={setSBStatus} />

        <Route path="/" exact component={Home} />

        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        {/* <div className="footer">
          <Footer />
        </div> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
