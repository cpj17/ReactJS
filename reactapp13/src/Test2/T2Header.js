import React from "react";
import "./T1HeaderStyle.css";
import { Link, Route, Routes } from "react-router-dom";
import T2Component1 from "./T2Component1";
import T2Component2 from "./T2Component2";
import T2Component3 from "./T2Component3";
import T2Component4 from "./T2Component4";
import T2Component5 from "./T2Component5";

const T2Header = () => {
    return (
      <div>
        <nav>
          <div className="grid-container">
            <Link to="/"> Tab 1 </Link>
            <Link to="/link2"> ControlledExample </Link>
            <Link to="/link3"> Accordion </Link>
            <Link to="/link4"> StackAlerts </Link>
            <Link to="/link5"> Tab </Link>
          </div>
          <br />
          <br />
        </nav>
        <Routes>
          <Route path="/" element={<T2Component1 />} />
          <Route path="/link2" element={<T2Component2 />} />
          <Route path="/link3" element={<T2Component3 />} />
          <Route path="/link4" element={<T2Component4 />} />
          <Route path="/link5" element={<T2Component5 />} />
        </Routes>
      </div>
    );
  };
  
  export default T2Header;
  