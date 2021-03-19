import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/css/style.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  document.body.className = "login-page";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, 700],
          },
        ]}
        subsets={["latin", "cyrillic-ext"]}
      />
      <GoogleFontLoader
        fonts={[
          {
            font: "Material+Icons",
          },
        ]}
      />
      <div className="login-box">
        <div className="logo">
          <a href="javascript:void(0);">Login</a>
        </div>
        <div className="card">
          <div className="body">
            <form id="sign_in" method="POST" onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="msg">Sign in</div> */}
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="material-icons">person</i>
                </span>
                <div className="form-line">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required
                    autofocus
                    ref={register}
                  />
                </div>
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="material-icons">lock</i>
                </span>
                <div className="form-line">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required
                    ref={register}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-8 p-t-5">
                  <input
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                    className="filled-in chk-col-pink"
                  />
                  <label for="rememberme">Remember Me</label>
                </div>
                <div className="col-xs-4">
                  <button
                    className="btn btn-block bg-pink waves-effect"
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </div>
              </div>
              <div className="row m-t-15 m-b--20">
                <div className="col-xs-6">
                  <Link to="/signup">Register Now!</Link>
                </div>
                <div className="col-xs-6 align-right">
                  <Link to="/forget/password">Forgot Password?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;