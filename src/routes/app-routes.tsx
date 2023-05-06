import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Scoreboard } from '../pages/Scoreboard'
import { Signin } from '../pages/Signin'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Scoreboard />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  )
}
