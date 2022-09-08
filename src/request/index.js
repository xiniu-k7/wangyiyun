import axios from 'axios';
let service = axios.create({
    baseURL: "https://autumnfish.cn/",
    timeout:5000
})
export default service