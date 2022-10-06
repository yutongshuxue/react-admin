
const routers = []

const files = require.context('../pages',true,/\.jsx?$/)

files.keys().map( item => {
  
  if(item.includes('./Home') || item.includes('/components') || 
  item.includes('./Login') || item.includes('./NotFound') || 
  item.includes('./providerPage')) return false

  const jsonObj = {}

  const pathList = item.split('.')
  const path = `/index${pathList[1].toLowerCase()}`
  const component = files(item).default

  jsonObj.path = path
  jsonObj.component = component

  routers.push(jsonObj)

})

console.log(routers,'routers')

export default routers