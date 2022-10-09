import { CHANGE_CITY } from "../constant"

export function changeCity(){
  return {
    type:CHANGE_CITY,
    city:'东莞'
  }
}