import axios from 'axios';

const getFabrics = (categorySlug) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/fabric/${categorySlug}`
  return axios
    .get(url)
}

const getSuitFabrics = () => {
  return getFabrics('suit')
    .then(res => {
      const initProduct = res.data.data.product
      const listFabric = res.data.data.fabrics
      const initFabric = listFabric.filter(v => v.selected === true)[0]
    
      return ({ initProduct, listFabric, initFabric })
    })
}

export { getFabrics, getSuitFabrics };