
import FormSignup from "../../components/signup/FormSignup";
import SignupFacebook from "../../components/signup/SignupFacebook";
import SignupGoogle from "../../components/signup/SignupGoogle";



const SignupPage = () => {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          {/* <img src="path/to/logo.png" alt="Logo" className="mx-auto mb-4" /> */}
          <h2 className="text-2xl font-semibold text-orange-500">SIGN UP</h2>
        </div>
        <FormSignup />
        <div className="flex justify-center space-x-4 mt-4">
          <SignupGoogle />
          <SignupFacebook />
        </div>
        <p className="mt-4 text-center text-gray-600">
          Have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Sign In Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
