import "./App.css";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import { useState } from "react";

function PrivateRoute({ login, children }) {
  if (login) {
    return children;
  } else {
    return <Navigate to="/signIn" />;
  }
}

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute login={login}>
              <Home setLogin={setLogin} name="Arun Thakur" />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<SignIn setLogin={setLogin} />} />
      </Routes>
    </>
  );
}

export default App;
