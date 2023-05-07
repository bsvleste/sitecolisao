import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
interface AuthProps {
  auth: boolean
}

export function Header() {
  const { signOut } = useContext(AuthContext)
  async function handleLoggout() {
    await signOut()
  }
  return (
    <nav className="bg-yellow-500 h-14 fixed inset-x-0 bottom-0 flex items-center justify-center z-10">
      <div className="flex items-center space-x-6 font-bold text-black">
        <>
          <button className="" onClick={handleLoggout}>
            Logoff
          </button>
        </>
      </div>
    </nav>
  )
}
