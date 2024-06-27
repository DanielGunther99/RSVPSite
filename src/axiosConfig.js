import axios from "axios";

const baseURL = "http://ec2-3-88-158-175.compute-1.amazonaws.com:5000";

const app = axios.create({
  baseURL,
});

app.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject()
);

export default app;
