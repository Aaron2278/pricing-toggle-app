import React from 'react';;

function Button({toggleText,onClick}) {
  return (
    <button onClick = {onClick}>{toggleText}</button>
  )
}
export default Button;
