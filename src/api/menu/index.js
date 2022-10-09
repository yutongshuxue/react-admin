import service from '../index'

export function getMenu(data){
  return service.request({
    url:'/api/admin/get_menu',
    method:'GET',
    params:{...data}
  })
}