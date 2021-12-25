import React, { useState } from "react"
import "./formInput.css"
export default function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const { id, label, errorMessage, onChange, ...inputProps } = props
  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="text-errorMessage">{errorMessage}</span>
    </div>
  )
}
