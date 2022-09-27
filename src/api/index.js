import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout:5000,
  headers:{
    post:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  }
})

export default instance