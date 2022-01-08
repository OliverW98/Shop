function LoginPage() {
  async function logInUser() {
    try {
      const res = await fetch("http://localhost:9000/logInUser");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error("oops: ", e);
    }
  }

  return (
    <div className="container">
      <div>log In</div>

      <button onClick={logInUser}>Login </button>
    </div>
  );
}
export default LoginPage;
