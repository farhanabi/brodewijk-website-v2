import axios from 'axios';

const getFeatures = (categorySlug) => {
  const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/feature/${categorySlug}`
  return axios
    .get(url)
}

const getSuitFeatures = () => {
  return getFeatures('suit')
    .then(res => {
      const listFeature = res.data.data.features 
                
      const initLining = listFeature[0].options.filter(v => v.selected)[0] || {}
      const initCanvas = listFeature[1].options.filter(v => v.selected)[0] || {}
      const initShoulder = listFeature[2].options.filter(v => v.selected)[0] || {}
      const initLapels = listFeature[3].options.filter(v => v.selected)[0] || {}
      const initChestPocket = listFeature[4].options.filter(v => v.selected)[0] || {}
      const initButtons = listFeature[5].options.filter(v => v.selected)[0] || {}
      const initPockets = listFeature[6].options.filter(v => v.selected)[0] || {}
      const initVents = listFeature[7].options.filter(v => v.selected)[0] || {}
      const initPants = listFeature[8].options.filter(v => v.selected)[0] || {}
      const initVest = listFeature[9].options.filter(v => v.selected)[0] || {}
      const initShirt = listFeature[10].options.filter(v => v.selected)[0] || {}
      const initTie = listFeature[11].options.filter(v => v.selected)[0] || {}
      const initMonogram = listFeature[12].options.filter(v => v.selected)[0] || {}

      const initFeature = [
        { name: "Lining",
          data: { 
            id: initLining.id,
            name: initLining.name, 
            description: initLining.description,
            codeName: initLining.code_name,
            resources: initLining.resources,
            price: initLining.prices[0].price,
            child: {
              id: initLining.childs.filter(v => v.selected)[0].id,
              name: initLining.childs.filter(v => v.selected)[0].name
            }
          }
        },
        { name: "Canvas Type", 
          data: { 
            id: initCanvas.id,
            name: initCanvas.name,
            codeName: initCanvas.code_name,
            resources: initCanvas.resources,
            price: initCanvas.prices[0].price 
          }
        },
        { name: "Shoulder Type",
          data: { 
            id: initShoulder.id,
            name: initShoulder.name,
            codeName: initShoulder.code_name,
            resources: initShoulder.resources,
            price: initShoulder.prices[0].price 
          }
        },
        { name: "Lapels", 
          data: { 
            id: initLapels.id,
            name: initLapels.name,
            codeName: initLapels.code_name, 
            resources: initLapels.resources, 
            price: initLapels.prices[0].price 
          }
        },
        { name: "Chest Pocket",
          data: { 
            id: initChestPocket.id, 
            name: initChestPocket.name, 
            codeName: initChestPocket.code_name,
            resources: initChestPocket.resources, 
            price: initChestPocket.prices[0].price 
          }
        },
        { name: "Buttons",
          data: { 
            id: initButtons.id, 
            name: initButtons.name, 
            codeName: initButtons.code_name, 
            resources: initButtons.resources, 
            price: initButtons.prices[0].price 
          }
        },
        { name: "Pockets",
          data: { 
            id: initPockets.id, 
            name: initPockets.name, 
            codeName: initButtons.code_name,
            resources: initPockets.resources, 
            price: initPockets.prices[0].price 
          }
        },
        { name: "Vents", 
          data: { 
            id: initVents.id, 
            name: initVents.name, 
            codeName: initVents.code_name,
            resources: initVents.resources,
            price: initVents.prices[0].price
          }
        },
        { name: "Pants", 
          data: { 
            id: initPants.id, 
            name: initPants.name, 
            codeName: initPants.code_name,
            resources: initPants.resources,
            price: initPants.prices[0].price
          }
        },
        { name: "Vest", 
          data: { 
            id: initVest.id, 
            name: initVest.name, 
            codeName: initVest.code_name,
            resources: initVest.resources,
            price: initVest.prices[0].price
          }
        },
        { name: "Shirt", 
          data: { 
            id: initShirt.id, 
            name: initShirt.name, 
            codeName: initShirt.code_name,
            resources: initShirt.resources,
            price: initShirt.prices[0].price
          }
        },
        { name: "Tie", 
          data: { 
            id: initTie.id, 
            name: initTie.name, 
            codeName: initTie.code_name,
            resources: initTie.resources,
            price: initTie.prices[0].price
          }
        },
        { name: "Monogram", 
          data: { 
            id: initMonogram.id, 
            name: initMonogram.name, 
            codeName: initMonogram.code_name,
            resources: initMonogram.resources,
            price: initMonogram.prices[0].price,
            value: ""
          }
        }
      ]

      return ({ listFeature, initFeature })
    })
}

export { getFeatures, getSuitFeatures };