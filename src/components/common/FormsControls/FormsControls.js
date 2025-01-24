import s from "./FormsControls.module.css";
import React from "react";

const FormControl = ({ input, meta, child, ...props }) => {
  
    const hasError = meta.touched && meta.error;
    console.log(hasError);
    
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        {props.children}
      </div>
      <div>{hasError && <span> {meta.error} </span>}</div>
    </div>
  );
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
  return <FormControl {...props}> <textarea {...restProps} {...input} /></FormControl>
};
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}> <input {...restProps} {...input} /></FormControl>
};
