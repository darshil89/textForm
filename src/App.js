// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const [currState, setCurrState] = useState("light-dark");

  // color of button
  const [btnState, setbtnState] = useState("primary");

  // for dark mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setCurrState("light_dark");
    if (mode == "light") {
      setMode("dark");
      setbtnState("secondary");
      document.body.style.backgroundColor = "#1C1C1C";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      setbtnState("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  // for green button
  const [mode2, setMode2] = useState("light");
  const toggleMode2 = () => {
    setCurrState("light_green");
    if (mode2 == "light") {
      setMode2("dark");
      setbtnState("success");
      showAlert("Green mode enabled", "success");
      document.body.style.backgroundColor = "#86DC3D";
    } else {
      setMode2("light");
      setbtnState("primary");
      showAlert("Light mode enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          currState={currState}
          mode={mode}
          toggleMode={toggleMode}
          mode2={mode2}
          toggleMode2={toggleMode2}
          title="Darsh"
          aboutText="AboutText"
        />
        <Alert alert={alert} />
        <Routes>
          {/* <Route
            path="/"
            element={
              
            }
          > */}

          <Route path="About" element={<About />}></Route>

          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
                mode2={mode2}
                currState={currState}
                btnState={btnState}
              ></TextForm>
            }
          ></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

      {/* <Navbar
        currState={currState}
        mode={mode}
        toggleMode={toggleMode}
        mode2={mode2}
        toggleMode2={toggleMode2}
        title="Darsh"
        aboutText="AboutText"
      />
        <Alert alert={alert} />
      <div className="container my-3">
        <About />
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
          mode2={mode2}
          currState={currState}
          btnState={btnState}
        ></TextForm>
      </div> */}
    </>
  );
}

export default App;
