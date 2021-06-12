import axios from "axios";

export const api = axios.create({
  baseURL: "https://afya-challenge.herokuapp.com",
});
