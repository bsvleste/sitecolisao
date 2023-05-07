/* eslint-disable react/no-unescaped-entities */
import {
  Activity,
  Envelope,
  LockKey,
  PaperPlane,
  PaperPlaneTilt,
} from 'phosphor-react'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { Text } from '../Text'
import { TextInput } from '../TextInput'
import logoColisao from '../../assets/logoColisao.png'
import { AuthContext } from '../../contexts/AuthContext'
export function FormSignin() {
  const { signIn, isLogging } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    await signIn(email, password)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-0 mx-3">
      <div className="flex justify-center items-center mb-2">
        <img src={logoColisao} className="w-36 sm:w-1/2" alt="Logo colisao" />
      </div>
      <div className="flex flex-col justify-center sm:bg-colisao-500 sm:text-yellow-500  sm:h-screen">
        <div className="w-11/12 sm:max-w-[380px] mx-auto mt-8">
          <div className="ml-1 sm:mx-auto">
            <div
              className="
                font-black
                relative ml-3
                after:absolute after:-bottom-0 after:-left-4 after:content[''] after:h-8  after:border-l-8 after:border-l-yellow-500 sm:after:border-l-yellow-500  text-2xl"
            >
              <Text size="lg">Sign In</Text>
            </div>
          </div>
          {/*  {erroAuth && (
            <div style={{ color: '#ff0000' }}>
              Login ou Senha Invalidos tente novamente
            </div>
          )} */}
          <form action="" className="mt-4" onSubmit={handleLogin}>
            <div className="">
              <Text size="sm">Email</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TextInput.Root>
              <p className="hidden">O Campo email é obrigatorio</p>
            </div>
            <div className="mt-6">
              <Text size="sm">Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope />
                </TextInput.Icon>
                <TextInput.Input
                  type="password"
                  placeholder="*************"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </TextInput.Root>
              <p className="hidden">O Campo senha é obrigatorio</p>
            </div>
            <div className="mt-9">
              <Button.Root color="bg-black" size="lg">
                <Button.Icon>
                  <PaperPlaneTilt />
                </Button.Icon>
                Enviar
              </Button.Root>
            </div>
          </form>
          {/*  <div className="flex flex-col items-end mt-6 mx-6 sm:mx-auto">
            <a
              href=""
              className="link-underline link-underline-black link-underline:hover"
            >
              Forgot your password
            </a>
            <span className="mt-4">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="link-underline link-underline-black link-underline:hover"
              >
                Sing up
              </Link>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
