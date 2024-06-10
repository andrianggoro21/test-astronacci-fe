import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SigninScheme } from "./services/validationSignin";
import { login } from "../../redux/reducer/authReducer";

const FormSignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninScheme,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values.email, values.password))
        .then(() => {
          if (from.pathname === "/signup" || from.pathname === "/") {
            navigate("/", { replace: true });
            // alert("Login Success");
          } else {
            navigate(`${from.pathname}${from.search}`, { replace: true });
          }
        })
        .catch((error) => {
          console.error("Signin error:", error);
        });

      resetForm({ values: { email: "", password: "" } });
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type="button"
            className="absolute right-0 px-3 py-2 text-gray-600"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-gray-600">
              Remember Me?
            </label>
          </div>
          <div>
            <a
              href="/forgot-password"
              className="text-orange-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default FormSignin;
