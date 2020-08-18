import axios from 'axios';

const getFeatures = (categorySlug) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/feature/${categorySlug}`
  return axios
    .get(url)
}

export { getFeatures };