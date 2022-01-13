import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const navigate = useNavigate();

  async function logInUser() {
    setEmailErr("");
    setPasswordErr("");
    const data = {
      email: email,
      password: password,
    };

    try {
      const res = await fetch("http://localhost:9000/logInUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      props.setLoggedInUser(json);
      navigate("/");
    } catch (e) {
      console.error("oops: ", e);
      setEmailErr("incorret Login details");
      setPasswordErr("incorret Login details");
    }
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="box">
            <p className="title has-text-centered">Log In</p>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <p className="help is-danger">{emailErr}</p>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <p className="help is-danger">{passwordErr}</p>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" onClick={logInUser}>
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
export default LoginPage;
