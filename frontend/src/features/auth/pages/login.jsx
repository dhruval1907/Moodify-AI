import React, { useEffect, useRef, useState } from "react";
import "../style/form.scss";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {


  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()
  const tiltRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // getting the data with the two-way

  async function handleSubmit(e) {
    e.preventDefault()

    await handleLogin({ username, email, password })

    navigate("/")
  }


  return (
    <div>
      <main>
        <div className="from-container" ref={tiltRef}>
          <h1>Login</h1>

          <br /><br />

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <div className="main">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <div
                className="icon"
                onClick={togglePassword}
                style={{ cursor: "pointer" }}
              >
                <TbLockPassword />
              </div>
            </div>

            <br />

            <button type="submit">Login</button>

          </form>

          <br />

          <p className="para">
            Have not account?
            <Link to="/register"> Register </Link>
          </p>

        </div>
      </main>
    </div>
  );
};

export default Login;