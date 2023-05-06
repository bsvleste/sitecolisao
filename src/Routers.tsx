import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Scoreboard } from './pages/Scoreboard'
import { Bid } from './pages/Bid'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Scoreboard />} />
        <Route path="/bid" element={<Bid />} />
      </Route>
    </Routes>
  )
}
