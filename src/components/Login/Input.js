import React, {useRef, useImperativeHandle} from "react";
import classes from "./Login.module.css";

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      focus
    }
  })

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.type}
        value={props.state.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
})

export default Input