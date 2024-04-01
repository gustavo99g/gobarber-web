import { fetchClient } from "@/utils/fetch"

interface createUserPayload{
    name: string
    email: string
    password: string
    isProvider: string
}
const createUser = async (payload: createUserPayload) => {
    const res = await fetchClient('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return res
}

const login = async (payload:any) => {
    const res = await fetchClient('/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    return res
    
}

export {createUser,login}