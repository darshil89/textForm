import React from "react";

export default function Alert(props) {
  const Capitalize = (word) => {
    const str = word.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div style={{height:'60px'}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{Capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}
