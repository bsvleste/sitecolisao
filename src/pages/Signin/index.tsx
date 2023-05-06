import { useContext, useEffect, useState } from 'react'
import { FormSignin } from '../../components/FormSignin'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { AuthContext } from '../../contexts/AuthContext'
export function Signin() {
  const { isLogging } = useContext(AuthContext)
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()
  function userLogged() {
    if (isLogged) {
      navigate('/')
    }
  }
  useEffect(() => {
    userLogged()
  }, [])
  if (isLogging) {
    return <Loading />
  }
  return <FormSignin />
}
