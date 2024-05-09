import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@Daffodil\.ac\.bd$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleRegister = () => {
    validateEmail();

    if (isValidEmail && password === repeatPassword) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.error(error));

      // Add any other data logging or registration logic here
    } else {
      if (!isValidEmail) {
        console.log(
          "Email is not valid. Please enter a valid @Daffodil.ac.bd email address."
        );
      }

      if (password !== repeatPassword) {
        setIsPasswordMatch(false);
        console.log("Password and Repeat Password do not match.");
      }
    }
  };

  return (
    <div id="wrapper">
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Register</h2>

              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Register</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">
            <div className="login-register-page">
              <div className="welcome-text">
                <h3> create your account!</h3>
                <span>
                  Already have an account? <a href="login.html">Log In!</a>
                </span>
              </div>

              <form method="post" id="register-account-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input
                    type="email"
                    className="input-text with-border"
                    name="emailaddress-register"
                    id="emailaddress-register"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  {isValidEmail ? (
                    <p></p>
                  ) : (
                    <p>
                      Email is not valid. Please enter a valid @Daffodil.ac.bd
                      email address.
                    </p>
                  )}
                </div>

                <div
                  className="input-with-icon-left"
                  title="Should be at least 8 characters long"
                  data-tippy-placement="bottom"
                >
                  <i className="icon-material-outline-lock"></i>
                  <input
                    type="password"
                    className="input-text with-border"
                    name="password-register"
                    id="password-register"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input
                    type="password"
                    className="input-text with-border"
                    name="password-repeat-register"
                    id="password-repeat-register"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                    required
                  />
                  {isPasswordMatch ? (
                    <p></p>
                  ) : (
                    <p>Password and Repeat Password do not match.</p>
                  )}
                </div>
              </form>

              <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="button"
                onClick={handleRegister}
              >
                Register{" "}
                <i className="icon-material-outline-arrow-right-alt"></i>
              </button>

              <div className="social-login-separator">
                <span>or</span>
              </div>
              <div className="social-login-buttons">
                <button className="facebook-login ripple-effect">
                  <i className="icon-brand-facebook-f"></i> Register via
                  Facebook
                </button>
                <button className="google-login ripple-effect">
                  <i className="icon-brand-google-plus-g"></i> Register via
                  Google+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-top-70"></div>
    </div>
  );
};

export default Signup;
