import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request:NextRequest){

  const token = request.cookies.get('token')?.value

  const loginUrl = new URL('/login', request.url)
  const homeUrl = new URL('/', request.url)
  const publicUrl = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register'
  
  if(!token){
    if(publicUrl){
      return NextResponse.next()
    }
    return NextResponse.redirect(loginUrl)
  }

  if(publicUrl){
    return NextResponse.redirect(homeUrl)
  }

}


export const config={
  matcher:['/', '/login', '/register', '/profile']
}