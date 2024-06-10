import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { keepLogin } from "../../redux/reducer/authReducer";
import PropTypes from "prop-types";

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);

  return <>{children}</>;
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
