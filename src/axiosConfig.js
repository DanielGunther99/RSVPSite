import axios from "axios";

const baseURL = "https://api.claraanddan2024.ca:5000";

const app = axios.create({
  baseURL,
});

app.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject()
);

export default app;
