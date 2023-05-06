import { Link } from 'react-router-dom'
interface AuthProps {
  auth: boolean
}

export function Header() {
  return (
    <nav className="bg-yellow-500 h-14 fixed inset-x-0 bottom-0 flex items-center justify-center z-10">
      <div className="flex items-center space-x-6 font-bold text-black">
        <>
          <Link className="active:bg-slate-400" to="/admin">
            Resultado
          </Link>
          <Link className="" to="/admin/bid">
            bid
          </Link>
          <a className="" href="#">
            Logoff
          </a>
        </>
      </div>
    </nav>
  )
}
