import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import './libs/dayjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}
