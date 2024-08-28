import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const currentValidation = Yup.object().shape({
    email: Yup.string()
      .email("Email Incorrect")
      .required("Email Must be Filled."),
    password: Yup.string().required("Password must be filled."),
  });

  const onLoginSuccess = (data) => {
    console.log("success", data);
    toast.success(data?.message);
  };

  const onLoginError = (data) => {
    console.log("success", data);
    toast.success(data?.message);
  };

  const submitHandler = (values, { resetForm }) => {
    let res = axios
      .post(`http://localhost:5500/api/v1/auth/login`, values)
      .then((response) => {
        toast.success(response?.data?.message);
        localStorage.setItem("accessToken", response?.data?.token);
        resetForm();
        navigate("/home");
      })
      .catch((error) => toast.error(error?.response?.data?.message));
  };
  return (
    <div className="bg-shine">
      <div className="bg-light p-5 rounded-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-5 text-uppercase fw-bold">Login</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={currentValidation}
          onSubmit={submitHandler}
          autoComplete={false}
          enableReinitialize
        >
          {({ values, setFieldValue, errors }) => (
            <Form autoComplete="false">
              <div className="form-group mt-2 mb-4">
                <div className="input-group">
                  <Field
                    name={"email"}
                    className="form-border"
                    placeHolder="Name"
                    type="text"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <ErrorMessage name={"email"}>
                  {(msg) => (
                    <div className="text-danger f-12 fw-medium">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group mt-2 mb-2">
                <div className="input-group">
                  <Field
                    name={"password"}
                    className="form-border"
                    type="password"
                    placeHolder="Password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <ErrorMessage name={"password"}>
                  {(msg) => (
                    <div className="text-danger f-12 fw-medium">{msg}</div>
                  )}
                </ErrorMessage>
              </div>
              <div className="text-end">
                <h6 className="f-14 text-primary">Forgot Password ?</h6>
              </div>
              <div className="mt-4 text-center">
                <button type="submit" className="btn login-btn w-100">
                  Login
                </button>
                <button type="reset" className="btn btn-light mt-2 w-100">
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
