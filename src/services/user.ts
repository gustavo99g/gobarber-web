import { fetchClient } from "@/utils/fetch"

interface CreateUserPayload{
    name: string
    email: string
    password: string
    isProvider: string
}

interface LoginPayload{
    email: string
    password: string
}

const createUser = async (payload: CreateUserPayload) => {
    const res = await fetchClient('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return res
}

const login = async (payload:LoginPayload) => {
    const res = await fetchClient('/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return res
    
}

export type User={
    id: string
    name: string
    email: string
    avatar: string
    isProvider:boolean
}


const getUser = async ():Promise<User>=>{
    const res = await fetchClient('/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return res
}

export {createUser,login,getUser}