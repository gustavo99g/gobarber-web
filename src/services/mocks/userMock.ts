import { http, HttpResponse, } from "msw"
import { User } from "../user"

const getUserMock = http.get<never, never,User>('/users/me', ({ request, }) => {
  return HttpResponse.json({ 
    id: '1',
    name: 'test',
    email: 'mail@mail.com',
    avatar: 'test.png',
    isProvider: false
   })
})

const loginMock = http.post('/users/login', ({ request, }) => {
  return HttpResponse.json({ 
    token: 'token',

   })
})


const registerUserMock = http.post<never>('/users', ({ request, }) => {
  return HttpResponse.json({
    
  },{
    status: 201
  })
})




export const userHandlers = [getUserMock,loginMock,registerUserMock]