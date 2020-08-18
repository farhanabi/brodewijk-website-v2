import axios from 'axios';

const getMeasurement = () => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/measurement`
  return axios
    .get(url)
}

export { getMeasurement };