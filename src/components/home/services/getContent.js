import axios from "axios";

export const getContent = async (token) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/content`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
