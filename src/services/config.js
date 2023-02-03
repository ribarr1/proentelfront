import axios from 'axios';

const BASE_URL = "http://3.217.201.31:8080/";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;