import axios from "axios";

export const api = axios.create({
  baseURL: "https://afya-challenge.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im92X1RvMEdDbzNWcFJQM0YiLCJpYXQiOjE2MjMzNjQwMDIsImV4cCI6MTYyMzQ1MDQwMn0.ia5Y3Aowrt_De2xDA32p4ebNbxBdVpG_b1P33-lcVMY",
  },
});
