import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error);
    toast("An unexpected error occured!!!");
  }

  return Promise.reject(error);
});

const loginUser = async (path, user) => {
  //log & register user
  try {
    const { data } = await axios.post(path, user);
    const admin = data.user.isAdmin;
    const jwt = data.token;
    console.log(jwt);
    localStorage.setItem("token", jwt);
    localStorage.setItem("admin", admin);

    window.location = "/products";
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      toast(ex.response.data);
    }
  }
};


export default {
  loginUser
};
