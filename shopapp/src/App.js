import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";

function App() {
  const [user, setUser] = useState(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  function setLoggedInUser(userDetails) {
    setUser({ ...user, ...userDetails });
    setIsUserSignedIn(true);
  }

  function logOut() {
    setUser(null);
    setIsUserSignedIn(false);
  }

  console.log(user);
  console.log(isUserSignedIn);

  return (
    <Router>
      <div className="container">
        <Navbar user={user} isUserSignedIn={isUserSignedIn} logOut={logOut} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Shop user={user} isUserSignedIn={isUserSignedIn} />}
            />
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
