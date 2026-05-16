'use client'
import { useAuthStore } from '@/store/auth.store'
import { useState } from 'react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { loginUser } from '@/services/auth.service'
import { useUIStore } from '@/store/ui.store'
import toast from 'react-hot-toast'

import { saveTokens } from '@/lib/token'
export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setAuth=useAuthStore((state)=>state.setAuth)
  const toggleSidebar=useUIStore((state)=>state.toggleSidebar)
  const isSidebarOpen=useUIStore((state)=>state.isSidebarOpen)
  const handleLogin = async () => {
    try {
      const data = await loginUser({
        email,
        password,
      })

      saveTokens(data.access, data.refresh)
      setAuth(
        {
          username:email,
          email:email,
        },
        data.access,
        data.refresh
      )
      toast.success('Login Succesful')
      console.log(data)
      console.log(useAuthStore.getState())
    } catch (error: any) {
      console.log(error.response?.data)
      toast.error('Login Failed')
    }
  }
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        "
    >
      <div
        className="
            w-(400-px)
            bg-zinc-900/80
            border
            border-zinc-700
            rounded-2xl
            p-10
            flex
            flex-col
            gap-5
            "
      >
        <h1
          className="
                text-4xl
                font-bold
                text-white
                "
        ></h1>
        <Input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <button onClick={toggleSidebar} className='bg-blue-500 text-white p-2 rounded'>Toggle Sidebar</button>
        <p className='text-white'>Sidebar:{isSidebarOpen ? 'Open':'Closed'}</p>
      </div>
    </div>
  )
}
