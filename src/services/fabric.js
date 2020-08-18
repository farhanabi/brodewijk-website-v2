import axios from 'axios';

const getFabrics = (categorySlug) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/fabric/${categorySlug}`
  return axios
    .get(url)
}

export { getFabrics };