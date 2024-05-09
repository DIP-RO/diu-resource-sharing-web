import { useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@Daffodil\.ac\.bd$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleLogin = () => {
    validateEmail();

    if (isValidEmail) {
      signIn(email, password)
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

      // Add any other login logic here
    } else {
      console.log(
        "Invalid email format. Please enter a valid @Daffodil.ac.bd email address."
      );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div id="wrapper">
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Log In</h2>

                <nav id="breadcrumbs" className="dark">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Log In</li>
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
                  <h3>We're glad to see you again!</h3>
                  <span>
                    Don't have an account? <a href="register.html">Sign Up!</a>
                  </span>
                </div>

                <div className="account-type">
                  <div>
                    <input
                      type="radio"
                      name="account-type-radio"
                      id="student-radio"
                      className="account-type-radio"
                      checked
                    />
                    <label className="ripple-effect-dark">
                      <i className="icon-line-awesome-graduation-cap"></i>{" "}
                      Students
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="account-type-radio"
                      id="teacher-radio"
                      className="account-type-radio"
                    />
                    <label className="ripple-effect-dark">
                      <i className="icon-material-outline-account-circle"></i>{" "}
                      Teachers
                    </label>
                  </div>
                </div>

                <form method="post" id="login-form">
                  <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline"></i>
                    <input
                      type="text"
                      className="input-text with-border"
                      name="emailaddress"
                      id="emailaddress"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>

                  <div className="input-with-icon-left">
                    <i className="icon-material-outline-lock"></i>
                    <input
                      type="password"
                      className="input-text with-border"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </form>

                <button
                  className="button full-width button-sliding-icon ripple-effect margin-top-10"
                  type="button"
                  onClick={handleLogin}
                >
                  Log In{" "}
                  <i className="icon-material-outline-arrow-right-alt"></i>
                </button>

                <div className="social-login-separator">
                  <span>or</span>
                </div>
                <div className="social-login-buttons">
                  <button className="facebook-login ripple-effect">
                    <i className="icon-brand-facebook-f"></i> Log In via
                    Facebook
                  </button>
                  <button className="google-login ripple-effect">
                    <i className="icon-brand-google-plus-g"></i> Log In via
                    Google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="margin-top-70"></div>
      </div>
    </div>
  );
};

export default Login;
