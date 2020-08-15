import axios from 'axios';

const registerApi = (form) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/register`
  return axios
    .post(url, form)
}

export default registerApi;