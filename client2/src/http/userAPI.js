import {$authHost, $host} from "./index" ;

export const registration = async (telephone, password) =>{
    const response = await $host.post('api/auth/registration', {telephone, password, role: 'ADMIN'})
    return response
}

export const login = async (telephone, password) =>{
    const response = await $host.post('api/auth/login', {telephone, password})
    return response
}

export const check = async () =>{
    const response = await $host.post('api/auth/registration', {telephone, password, role: 'ADMIN'})
    return response
}