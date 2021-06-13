import axios from "axios";

export const api = axios.create({
  baseURL: "https://afya-challenge.herokuapp.com",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkE4LUJqc1M2UlVZWlRYcFYiLCJpYXQiOjE2MjM1NTMwODAsImV4cCI6MTYyNDE1Nzg4MH0.uZw637-MzRCvLI5LFyEegoo7wgaaxtWuJNY2u7H1vgQ",
  },
});
