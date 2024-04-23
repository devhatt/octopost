import Axios from 'axios';

const octopostApi = Axios.create({
  baseURL: 'http://localhost:3000',
});

export { octopostApi };