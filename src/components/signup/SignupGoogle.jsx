import googleIcon from "../../assets/icons/google-icon.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinWithGoogle } from "../../firebase/firebase";
import { loginSuccess, setUser } from "../../redux/reducer/authReducer";

const SignupGoogle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginWithGoogle = async () => {
    try {
      const result = await signinWithGoogle();
      console.log("Google sign up", result);
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
      {/* Google sign up button */}
      <div className="flex justify-center space-x-4">
        <button
          className="text-black px-4 py-2 rounded-lg flex items-center"
          onClick={onLoginWithGoogle}
        >
          <img src={googleIcon} alt="Google Icon" className="w-5 h-5 mr-2" />{" "}
          Google
        </button>
      </div>
    </div>
  );
};

export default SignupGoogle;
