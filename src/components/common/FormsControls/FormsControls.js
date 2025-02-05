import { Field } from "redux-form";
import styles from "./FormsControls.module.css";
import React from "react";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  console.log(hasError);

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      <div>{hasError && <span> {meta.error} </span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};



export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => {
  return  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
    {text}
  </div>;
};
