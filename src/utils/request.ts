import axios from "axios";

const request = axios.create({
  baseURL: "https://curso-vue-564e7-default-rtdb.firebaseio.com/",
});

export default request;
