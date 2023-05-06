import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import { AuthContext, AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}
