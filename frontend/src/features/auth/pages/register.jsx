import React, { useEffect, useRef, useState } from "react";
import "../style/reg.scss";
import VanillaTilt from "vanilla-tilt";
import { Link, useNavigate } from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
// import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const tiltRef = useRef(null);


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

  const handleSubmit = async (e) => {
    // e.preventDefault();

    // await handleRegister(email, username, password);

    // console.log("User registered");

    // navigate("/login");
  };

  // if (loading) {
  //   return (
  //     <main>
  //       <h1>Loading...</h1>
  //     </main>
  //   );
  // }

  return (
    <div>
      <main>
        <div className="from-container" ref={tiltRef}>
          <h1>Register</h1>

          <br />

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
                // type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div
                className="icon"
                onClick={togglePassword}
                style={{ cursor: "pointer" }}
              >
                <TbLockPassword />
              </div>

            </div>

            <br /><br />

            <button type="submit">Register</button>

          </form>

          <br />

          <p className="para">
            Already have an account?
            <Link to="/login"> Login </Link>
          </p>

        </div>
      </main>
    </div>
  );
};

export default Register;