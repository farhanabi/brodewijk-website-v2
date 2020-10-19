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
            prices: initLining.prices,
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
            prices: initCanvas.prices
          }
        },
        { name: "Shoulder Type",
          data: { 
            id: initShoulder.id,
            name: initShoulder.name,
            codeName: initShoulder.code_name,
            resources: initShoulder.resources,
            prices: initShoulder.prices 
          }
        },
        { name: "Lapels", 
          data: { 
            id: initLapels.id,
            name: initLapels.name,
            codeName: initLapels.code_name, 
            resources: initLapels.resources, 
            prices: initLapels.prices
          }
        },
        { name: "Chest Pocket",
          data: { 
            id: initChestPocket.id, 
            name: initChestPocket.name, 
            codeName: initChestPocket.code_name,
            resources: initChestPocket.resources, 
            prices: initChestPocket.prices
          }
        },
        { name: "Buttons",
          data: { 
            id: initButtons.id, 
            name: initButtons.name, 
            codeName: initButtons.code_name, 
            resources: initButtons.resources, 
            prices: initButtons.prices
          }
        },
        { name: "Pockets",
          data: { 
            id: initPockets.id, 
            name: initPockets.name, 
            codeName: initButtons.code_name,
            resources: initPockets.resources, 
            prices: initPockets.prices
          }
        },
        { name: "Vents", 
          data: { 
            id: initVents.id, 
            name: initVents.name, 
            codeName: initVents.code_name,
            resources: initVents.resources,
            prices: initVents.prices
          }
        },
        { name: "Pants", 
          data: { 
            id: initPants.id, 
            name: initPants.name, 
            codeName: initPants.code_name,
            resources: initPants.resources,
            prices: initPants.prices
          }
        },
        { name: "Vest", 
          data: { 
            id: initVest.id, 
            name: initVest.name, 
            codeName: initVest.code_name,
            resources: initVest.resources,
            prices: initVest.prices
          }
        },
        { name: "Shirt", 
          data: { 
            id: initShirt.id, 
            name: initShirt.name, 
            codeName: initShirt.code_name,
            resources: initShirt.resources,
            prices: initShirt.prices
          }
        },
        { name: "Tie", 
          data: { 
            id: initTie.id, 
            name: initTie.name, 
            codeName: initTie.code_name,
            resources: initTie.resources,
            prices: initTie.prices
          }
        },
        { name: "Monogram", 
          data: { 
            id: initMonogram.id, 
            name: initMonogram.name, 
            codeName: initMonogram.code_name,
            resources: initMonogram.resources,
            prices: initMonogram.prices,
            value: ""
          }
        }
      ]

      return ({ listFeature, initFeature })
    })
}

export { getFeatures, getSuitFeatures };