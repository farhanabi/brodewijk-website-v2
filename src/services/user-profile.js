import axios from 'axios';

const userProfileApi = (token) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/profile`
  return axios
    .get(url, {
      params: { token: token }
    })
}

export default userProfileApi;