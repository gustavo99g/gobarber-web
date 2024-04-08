'use server'
import {  getCookie } from "@/app/actions"

const fetchClient = async(url:string,options?:RequestInit)=>{

  const token = await getCookie('token')

  const res = await fetch(`${process.env.BACKEND_URL}${url}`,{
    ...options,
    headers:{
      ...options?.headers,
      Authorization:token ? `Bearer ${token}` : ''

    }
  })
  if(res.status === 201) {
      return
  }
  const data = await res.json()
  
  if (!res.ok) {
      const error = data?.error ?? data?.message ?? 'Ocorreu um erro inesperado'

      throw JSON.stringify(error)
  }
  return data 

}



export {fetchClient}