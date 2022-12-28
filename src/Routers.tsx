import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Scoreboard } from './pages/Scoreboard'
import { Bid } from './pages/Bid'

export function Routers() {
  return (
    <Routes>
      <Route path="/admin" element={<DefaultLayout />}>
        <Route path="/admin" element={<Scoreboard />} />
        <Route path="/admin/bid" element={<Bid />} />
      </Route>
    </Routes>
  )
}
