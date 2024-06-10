import axios from "axios";

export const signupUser = async (username, email, password) => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/user/registration`, {
      username,
      email,
      password,
    });
  } catch (error) {
    console.error("Error during signup:", error);
  }
};
