import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  //to change the initail text
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //to convert to UpperCase
  const UpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  //to convert to lower case
  const LowerClick = () => {
    let newLower = text.toLowerCase();
    setText(newLower);
    props.showAlert("Converted to LowerCase", "success");
  };
  //to clear all items
  const Clear = () => {
    setText(" ");
    props.showAlert("Cleared", "success");
  };
  //to convert fisrt letter to capital
  const Capitalize = () => {
    let str = text;
    str = str.trim();
    str = " " + str;
    var result = "";
    var i;
    const l = text.length;
    for (i = 0; i < l; i++) {
      var ch = str.charAt(i);
      if (ch == " ") {
        result = result + str.charAt(i + 1).toUpperCase();
      } else {
        result = result + str.charAt(i + 1);
      }
    }
    setText(result);
  };
  //to find a word
  const Find = () => {
    console.log("clicked");
    let wordToFind = prompt("enter the word to  find");
    let str = text;
    str = str.trim();
    str = str + " ";
    var currword = "";
    var i,
      c = 0;
    const l = text.length;
    for (i = 0; i < l; i++) {
      var ch = str.charAt(i);
      if (ch != " ") currword = currword + ch;
      else {
        if (currword == wordToFind) {
          alert("Word Found");
          c = 1;
          break;
        }
        currword = "";
      }
    }
    if (c == 0) {
      alert("Word Not Found");
    }
  };
  

  return (
    <>
      <div
        className="container"
        
        style={{ color: props.currState =="light_dark"?(props.mode === "light" ? "black" : "white"):(props.mode2 === "light" ? "black" : "white") }} 
      >
        <h2 >{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.currState =="light_dark"?(props.mode === "light" ? "white" : "#212324"):(props.mode2 === "light" ? "white" : "#4F7942"),
              color: props.currState =="light_dark"?(props.mode === "light" ? "black" : "white"):(props.mode2 === "light" ? "black" : "white")
            }}
            className="form-control"
            value={text}
            placeholder="Enter the text"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.btnState} mx-2 my-1`} onClick={UpperClick} >
          Convet to UpperCase
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnState} mx-2 my-1`} onClick={LowerClick} >
          Convet to LowerCase
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnState} mx-2 my-1`} onClick={Clear} >
          Clear
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnState} mx-2 my-1`} onClick={Capitalize} >
          Capitalize
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnState} mx-2 my-1`} onClick={Find} >
          Find
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.currState =="light_dark"?(props.mode === "light" ? "black" : "white"):(props.mode2 === "light" ? "black" : "white")}}
      >
        <h2>Your Text Summary </h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!=0}).length} words , {text.length} characters
        </p>
        <p>Time Taken To Read --- {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
      </div>
    </>
  );
}
