import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { auth, firestore } from '../firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

type UserProps = {
  id: string
  isAdmin: boolean
  name: string
}

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>
  isLogging: boolean
  isAuthenticated: boolean
  user: UserProps | null
}
type AuthProviderProps = {
  children: ReactNode
}
const USER_COLLECTION = '@colisao:user '
export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLogging, setIsLogging] = useState(false)

  async function signIn(email: string, password: string) {
    if (!email || !password) {
      return alert('Informe o email e a senha')
    }
    setIsLogging(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((account) => {
        const docRef = doc(firestore, 'users', account.user.uid)
        getDoc(docRef)
          .then(async (profile) => {
            const { name, isAdmin } = profile.data() as UserProps
            if (profile.exists()) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
              }
              localStorage.setItem(USER_COLLECTION, JSON.stringify(userData))
              setUser(userData)
            }
          })
          .catch(() => alert('Não foi possivel realizar o login'))
        setIsAuthenticated(true)
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
  async function loadingUserStoragedData() {
    setIsLogging(true)
    const storagedUser = localStorage.getItem(USER_COLLECTION)
    if (storagedUser) {
      const userData = JSON.parse(storagedUser) as UserProps
      setUser(userData)
    }
    setIsLogging(false)
  }
  useEffect(() => {
    loadingUserStoragedData()
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, isLogging, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
