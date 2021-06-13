import axios from 'axios';

export const api = axios.create({
  baseURL: "https://afya-challenge.herokuapp.com",
  // headers: {
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im92X1RvMEdDbzNWcFJQM0YiLCJpYXQiOjE2MjM0NTExNjAsImV4cCI6MTYyNDA1NTk2MH0.IIx5Av99y2Zk9jRimkuBPw-BhO5vyJjyymBlN4jq4V0",
  // },
});

