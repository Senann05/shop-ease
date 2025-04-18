import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../app/store'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
    children: ReactNode
}
  
const ProtectedRoute = ({ children }: ProtectedRouteProps ) => {
  const user = useSelector((state: RootState) => state.auth.user)

  if (!user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default ProtectedRoute
