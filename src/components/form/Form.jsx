import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import "./Form.css";

const validation = Yup.object().shape({
  title: Yup.string()
    .min(1, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(1, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
});

function Form(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validation,
    onSubmit: (values, {resetForm}) => {
      props.onSubmit({title: values.title, description: values.description});
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <textarea
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <button type="reset" onClick={() => formik.resetForm()}>
        Reset
      </button>
      <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
        Submit
      </button>
    </form>
  );
}

export default Form;
