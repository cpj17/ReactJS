import React from "react";
import "./T1HeaderStyle.css";
import { Link, Route, Routes } from "react-router-dom";
import T1Component1 from "./T1Component1";
import T1Component2 from "./T1Component2";
import T1Component3 from "./T1Component3";
import T1Component4 from "./T1Component4";
import T1Component5 from "./T1Component5";
import T1Component6 from "./T1Component6";
import T1Component7 from "./T1Component7";
import T1Component8 from "./T1Component8";
import T1Component9 from "./T1Component9";
import T1Component10 from "./T1Component10";
import T1Component11 from "./T1Component11";
import T1Component12 from "./T1Component12";
import T1Component13 from "./T1Component13";
import T1Component14 from "./T1Component14";
import T1Component15 from "./T1Component15";
import T1Component16 from "./T1Component16";
import T1Component17 from "./T1Component17";
import T1Component18 from "./T1Component18";
import T1Component19 from "./T1Component19";

const T1Header = () => {
  return (
    <div>
      <nav>
        <div className="grid-container">
          <Link to="/"> Autocomplete 1 </Link>
          <Link to="/link2"> Autocomplete 2 </Link>
          <Link to="/link3"> Autocomplete 3 </Link>
          <Link to="/link4"> Input 1 </Link>
          <Link to="/link5"> Input 2 </Link>
          <Link to="/link6"> Input 3 Number </Link>
          <Link to="/link7"> UnstyledSelectForm </Link>
          <Link to="/link8"> UnstyledSelectControlled </Link>
          <Link to="/link9"> UnstyledSelectMultiple </Link>
          <Link to="/link10"> UnstyledSelectObjectValues </Link>
          <Link to="/link11"> UnstyledSelectGrouping </Link>
          <Link to="/link12"> UnstyledSelectCustomRenderValue </Link>
          <Link to="/link13"> UseSwitchesBasic </Link>
          <Link to="/link14"> UnstyledSnackbarIntroduction </Link>
          <Link to="/link15"> UseSnackbar </Link>
          <Link to="/link16"> TransitionComponentSnackbar </Link>
          <Link to="/link17"> WrappedMenuItems </Link>
          <Link to="/link18"> UseSnackbar </Link>
          <Link to="/link19"> UseSnackbar </Link>
        </div>
        <br />
        <br />
      </nav>
      <Routes>
        <Route path="/" element={<T1Component1 />} />
        <Route path="/link2" element={<T1Component2 />} />
        <Route path="/link3" element={<T1Component3 />} />
        <Route path="/link4" element={<T1Component4 />} />
        <Route path="/link5" element={<T1Component5 />} />
        <Route path="/link6" element={<T1Component6 />} />
        <Route path="/link7" element={<T1Component7 />} />
        <Route path="/link8" element={<T1Component8 />} />
        <Route path="/link9" element={<T1Component9 />} />
        <Route path="/link10" element={<T1Component10 />} />
        <Route path="/link11" element={<T1Component11 />} />
        <Route path="/link12" element={<T1Component12 />} />
        <Route path="/link13" element={<T1Component13 />} />
        <Route path="/link14" element={<T1Component14 />} />
        <Route path="/link15" element={<T1Component15 />} />
        <Route path="/link16" element={<T1Component16 />} />
        <Route path="/link17" element={<T1Component17 />} />
        <Route path="/link18" element={<T1Component18 />} />
        <Route path="/link19" element={<T1Component19 />} />
      </Routes>
    </div>
  );
};

export default T1Header;
