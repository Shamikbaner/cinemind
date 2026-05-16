'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { registerUser } from '@/services/auth.service'
import toast from 'react-hot-toast'

export default function Registerpage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      const data = await registerUser({
        username,
        email,
        password,
      })

      console.log(data)
      toast.success('User Registered Successfully')
    } catch (error: any) {
      console.log(error.response.data)
      toast.error(JSON.stringify(error.response.data))
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div
        className="
        w-[400px]
        bg-zinc-900
        p-10
        rounded-xl
        flex
        flex-col
        gap-4
        border
        border-zinc-800"
      >
        <h1 className="text-white text-4xl font-bold mb-4">Sign Up</h1>

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Create Account</Button>
      </div>
    </div>
  )
}
