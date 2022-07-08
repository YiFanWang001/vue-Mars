import request from './request'
export const login = object => request.post('/users/login', object)