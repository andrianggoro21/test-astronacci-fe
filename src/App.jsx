import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/Signup";
import SigninPage from "./pages/signin/Signin";
import HomePage from "./pages/home/Home";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
