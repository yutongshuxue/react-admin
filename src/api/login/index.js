import service from '../index'

export function login(data){
  return service.request({
    url:'/api/admin/login',
    method:'GET',
    params:{...data}
  })
}