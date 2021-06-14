import axios from "axios";

let apiToken = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "https://afya-challenge.herokuapp.com",
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});
