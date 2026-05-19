'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { getAccessToken } from "@/lib/token"

export default function ProtectedRoute({
    children,
}:{
    children:React.ReactNode
}){
    const router=useRouter()
    const{data:session,status}=useSession()

    useEffect(()=>{
        const token=getAccessToken()
        const isLoggedIn=token || session
        if(status !== 'loading' && !isLoggedIn){
            router.push('/login')
        }
    },[router,session,status])

    if(status==='loading'){
        return <div className="text-white p-10">Loading...</div>
    }

    return <>{children}</>
}
