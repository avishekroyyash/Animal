import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session,'this is proxy.js')
    if(!session){
         return NextResponse.redirect(new URL('/login', request.url))
    }
    else {
        return NextResponse.next();
    }
//   return NextResponse.redirect(new URL('/login', request.url))
}
 

 
export const config = {
  matcher: ['/profile','/all-animals/:path+'],
}