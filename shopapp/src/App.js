import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";

function App() {
  const [user, setUser] = useState(null);

  function setLoggedInUser(userDetails) {
    setUser({ ...user, ...userDetails });
  }

  function logOut() {
    setUser(null);
  }

  console.log(user);

  return (
    <Router>
      <div className="container">
        <Navbar user={user} logOut={logOut} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/Login"
              element={<Login setLoggedInUser={setLoggedInUser} />}
            />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
