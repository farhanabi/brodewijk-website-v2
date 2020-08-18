import axios from 'axios';

const loginApi = (form) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/login`
  return axios
    .post(url, form)
}

export default loginApi;