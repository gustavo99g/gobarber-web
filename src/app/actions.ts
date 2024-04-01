'use server'
import { cookies } from 'next/headers'
 
async function setCookie(name:string,value:string) {
  cookies().set({
    name,
    value,
    httpOnly: true,
    path: '/',
  })
}

async function getCookie(name:string) {
  return cookies().get(name)?.value
}

async function deleteCookie(name:string) {
  cookies().delete(name)
}

export { setCookie, getCookie, deleteCookie }