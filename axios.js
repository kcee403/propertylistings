import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.realmassive.com/api/v1/'
});
export default instance;
