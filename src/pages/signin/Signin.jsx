import FormSignin from "../../components/signin/FormSignin";
import SigninFacebook from "../../components/signin/SigninFacebook";
import SigninGoogle from "../../components/signin/SigninGoogle";

const SigninPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          {/* <img src="path/to/logo.png" alt="Logo" className="mx-auto mb-4" /> */}
          <h2 className="text-2xl font-semibold text-orange-500">SIGN IN</h2>
        </div>
        <FormSignin />
        <div className="flex justify-center space-x-4 mt-4">
          <SigninGoogle />
          <SigninFacebook />
        </div>
        <p className="mt-4 text-center text-gray-600">
          Dont have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            Sign Up Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
