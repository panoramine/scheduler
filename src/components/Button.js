import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {
   // controlling button appearance and functionality with class names
   let buttonClass = classNames({
      button: true,
      "button--confirm": props.confirm,
      "button--danger": props.danger, 
   })    
   
   // button text is variable
   return <button disabled={props.disabled} onClick={props.onClick} className={buttonClass}>{props.children}</button>;
}