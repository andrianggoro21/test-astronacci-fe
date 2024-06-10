import facebookIcon from "../../assets/icons/facebook-icon.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinWithFacebook } from "../../firebase/firebase";
import { loginSuccess, setUser } from "../../redux/reducer/authReducer";

const SignupFacebook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginWithFacebook = async () => {
    try {
      const result = await signinWithFacebook();
      console.log("facebook sign up", result);
      const userPayload = {
        id: result.data.data.user.id,
        username: result.data.data.user.username,
        email: result.data.data.user.email,
        membershipTypeId: result.data.data.user.membershipTypeId,
      };

      dispatch(setUser(userPayload));
      dispatch(loginSuccess());
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* Facebook sign up button */}
      <div className="flex justify-center space-x-4">
        <button
          className="text-black px-4 py-2 rounded-lg flex items-center"
          onClick={onLoginWithFacebook}
        >
          <img
            src={facebookIcon}
            alt="Facebook Icon"
            className="w-5 h-5 mr-2"
          />{" "}
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SignupFacebook;
