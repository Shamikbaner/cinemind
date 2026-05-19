'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { registerUser } from '@/services/auth.service'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    try {
      await registerUser({
        email,
        username,
        password,
      })
      toast.success('Account Created Successfully')
      setEmail('')
      setUsername('')
      setPassword('')
    } catch (error: any) {
      console.log(error.response?.data)
      toast.error('Signup Failed')
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900/80 border border-zinc-700 rounded-2xl p-8 flex flex-col gap-5 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white">Create Account</h1>
        <Input
          type="text"
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
        <Button onClick={handleSignup}>Sign Up</Button>
      </div>
    </div>
  )
}
