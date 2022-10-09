import { CHANGE_CITY } from "../constant"

const initCity = {
  city:'上海'
}

const city = (state=initCity,action) => {
  switch(action.type){
    case CHANGE_CITY:
      return {
        city:action.city
      }
    default:
      return state
  }
}

export default city