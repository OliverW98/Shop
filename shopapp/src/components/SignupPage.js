function SignupPage() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="box">
            <form>
              <div class="field">
                <label class="label">First Name</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="First Name" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Last Name" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="Email" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Confirm Password</label>
                <div class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
export default SignupPage;
