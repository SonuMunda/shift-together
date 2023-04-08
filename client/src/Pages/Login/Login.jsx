import React, { useState} from "react";
import "./Login.css";
import { Link , useNavigate} from "react-router-dom";
import { BiLock, BiUser } from "react-icons/bi";
import loginBG from "/images/login_bg.png";
import RentWidget from "../../components/RentWidget/RentWidget";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
      if (response.status === 400 || !data) {
        setError("Invalid Credentials");
      } else {
        window.alert("Login Successfull");
        navigate('/');
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="main-wrapper">
      {/* rent widget */}
      <RentWidget />

      {/* Login Section */}
      <section className="login">
        <div className="login-container">
          <div className="login-row">
            <div className="login-col" id="login-img-col">
              <div className="login-img">
                <img src={loginBG} alt="image" />
              </div>
            </div>
            <div className="login-col">
              <div className="login-form-container">
                <div className="login-heading">
                  <h4 className="login-text p-2">Login</h4>
                </div>

                {/* Login Form */}
                <form className="login-form" onSubmit={handleFormSubmit} method="POST">
                  {error && <p className="error">{error}</p>}
                  <div className="form-group">
                    <div className="form-icon">
                      <BiUser />
                    </div>
                    <input
                      type="email"
                      name="user-email"
                      className="login-form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiLock />
                    </div>
                    <input
                      type="password"
                      name="user-password"
                      className="login-form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  <input type="submit" value="Login" className="login-btn" />
                </form>

                <div className="login-text my-2">
                  <Link to="/signup" className="signup-link">
                    Don't have an account? Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
