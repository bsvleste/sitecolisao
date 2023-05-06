import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseConfig'

type UserProps = {
  id: string
  isAdmin: boolean
  name: string
  email: string | null
}
type SignInCredentials = {
  email: string
  password: string
}
type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>
  isLogging: boolean
}
type AuthProviderProps = {
  children: ReactNode
}
export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState(false)

  async function signIn(email: string, password: string) {
    if (!email || !password) {
      return alert('Informe o email e a senha')
    }
    setIsLogging(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((account) => {
        console.log(account)
      })
      .catch((error) => {
        const { code } = error
        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          alert('Usuário ou senha incorretos')
        } else {
          alert('Ops!! Não foi possivel realizar o loggin, tente novamente')
        }
      })
      .finally(() => setIsLogging(false))
  }
  return (
    <AuthContext.Provider value={{ signIn, isLogging }}>
      {children}
    </AuthContext.Provider>
  )
}
