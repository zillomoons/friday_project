import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})
export const authAPI = {
    login(email: string, password: string, rememberMe: boolean){
        return instance.post<AuthResType>('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/me')
    }, 
    me(){
        return instance.post<AuthResType>('auth/me')
    },
    register(email: string, password: string) {
        return instance.post('auth/register', {email, password} )
    }
}

type AuthResType = {
    _id: string
    email: string
    name: string
    rememberMe: boolean
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    verified: boolean
}