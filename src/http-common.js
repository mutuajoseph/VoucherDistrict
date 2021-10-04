import axios from "axios";

export default axios.create({
  baseURL: "http://138.68.189.32:9087/api",
  headers: {
    "Content-type": "application/json",
  }
});
