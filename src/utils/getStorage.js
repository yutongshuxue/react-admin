export const setStorage = (key,value,time) => {
  // 存入前先删除原有的数据
  const oldData = getStorage(key)
  if(oldData){
    removeStorage(key)
  }

  const nowTime = new Date().getTime()
  const storageData = {data:value,expTime:nowTime+time}
  localStorage.setItem(key,JSON.stringify(storageData))

}

export const getStorage = key => {
  const getData = localStorage.getItem(key)?localStorage.getItem(key):''
  if(getData){
    const { data, expTime } = JSON.parse(getData)
    const nowTime = new Date().getTime()
    if(expTime - nowTime >0){
      return data
    }
    console.log('该数据以过了有效期')
    return null
  }
  console.log('找不到该key值对应的数据')
  return null
}

export const removeStorage = key => {
  localStorage.removeItem(key)
}

export const clearStorage = () => {
  localStorage.clear()
}