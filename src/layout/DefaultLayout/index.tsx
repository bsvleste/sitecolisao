import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="mx-3">
      <div className="wrapper">
        {/* <Header /> */}
        <Outlet />
      </div>
    </div>
  )
}
