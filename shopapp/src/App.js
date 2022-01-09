import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";

function App() {
  const [user, setUser] = useState(null);

  async function signUpUser(data) {
    try {
      const res = await fetch("http://localhost:9000/signUpUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      setUser({ ...user, ...json });
    } catch (e) {
      console.error(e);
    }
  }

  function logOut() {
    setUser(null);
  }

  return (
    <Router>
      <div className="container">
        <Navbar user={user} logOut={logOut} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Login" element={<Login />} />
            <Route
              path="/Signup"
              element={<Signup signUpUser={signUpUser} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
