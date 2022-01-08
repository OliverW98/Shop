function SignupPage() {
  async function signUpUser() {
    const data = { username: "example" };
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
            <div className="field">
              <label className="label">First Name</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="First Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Last Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" onClick={signUpUser}>
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
