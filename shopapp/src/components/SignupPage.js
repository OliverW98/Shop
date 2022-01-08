import { useState } from "react";
function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNamErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  function checkSignUpDetails() {
    let valldSignUp = true;
    setFirstNameErr("");
    setLastNamErr("");
    setEmailErr("");
    setPasswordErr("");
    if (firstName === "") {
      setFirstNameErr("Field cannot be empty");
      valldSignUp = false;
    }
    if (lastName === "") {
      setLastNamErr("Field cannot be empty");
      valldSignUp = false;
    }
    if (email === "") {
      setEmailErr("Field cannot be empty");
      valldSignUp = false;
    }
    if (password !== "") {
      if (password.length > 8) {
        if (password !== conPassword) {
          setPasswordErr("Passwords do not match");
          valldSignUp = false;
        }
      } else {
        setPasswordErr("Passowrd must be longer than 8 characters");
        valldSignUp = false;
      }
    } else {
      setPasswordErr("Field cannot be empty");
      valldSignUp = false;
    }
    if (valldSignUp) {
      signUpUser();
    }
  }

  async function signUpUser() {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    const body = JSON.stringify(data);
    console.log(body);

    try {
      const res = await fetch("http://localhost:9000/signUpUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const json = await res.json();
      console.log({ json });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="box">
            <p className="title has-text-centered">Sign Up</p>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <p className="help is-danger">{firstNameErr}</p>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <p className="help is-danger">{lastNameErr}</p>
            </div>
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
              <label className="label">Confirm Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={checkSignUpDetails}
                >
                  Sign Up
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
export default SignupPage;
