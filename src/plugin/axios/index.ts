import axios from 'axios'
import { Axios } from 'axios'

const axiosIns: Axios = axios.create({
    baseURL:'http://localhost:5053/api',
        timeout: 30000,
});
console.log(axiosIns);
export default axiosIns;
