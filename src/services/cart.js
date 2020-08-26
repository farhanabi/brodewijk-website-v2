import axios from 'axios';

const getCart = (token) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/get-cart`
  return axios
    .get(url, {
      params: { token: token }
    })
}

const addToCart = (token, data) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/add-to-cart`
  return axios
    .post(url, data, {
      params: { token: token }
    })
}

export { getCart, addToCart };