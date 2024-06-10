import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import toast from 'react-hot-toast'

const firebaseConfig = {
  apiKey: "AIzaSyD3hdekKSp-eyoDF44jisOMQZngB_GCuYw",
  authDomain: "test-astronacci-a862d.firebaseapp.com",
  projectId: "test-astronacci-a862d",
  storageBucket: "test-astronacci-a862d.appspot.com",
  messagingSenderId: "676671788643",
  appId: "1:676671788643:web:564952a9841623416c4a56",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signinWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user
  
      const q = query(collection(db, 'users'), where('uid', '==', user.uid))
      const docs = await getDocs(q)
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
        })
      }
  
      const axiosRes = await axios.post(`${import.meta.env.VITE_API_URL}/user/google-login`, {
        email: user.email,
        username: user.displayName,
      })
    //   console.log("Login response", axiosRes);
      localStorage.setItem('token', axiosRes?.data?.data?.token)
      return axiosRes
  
    } catch (err) {
      console.error(err)
      toast.error(err.message)
    }
  }

  const signinWithFacebook = async () => {
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      const user = res.user;
  
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'facebook',
          email: user.email,
        });
      }
  
      const axiosRes = await axios.post(`${import.meta.env.VITE_API_URL}/user/facebook-login`, {
        email: user.email,
        username: user.displayName,
      });
    //   console.log("Login response", axiosRes);
      localStorage.setItem('token', axiosRes?.data?.data?.token);
      return axiosRes;
  
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  
  const logout = () => {
    signOut(auth)
    return 'logout success'
  }

  export { auth, db, signinWithGoogle, signinWithFacebook, logout }
