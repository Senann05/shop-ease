import { Navigate, Outlet} from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const ProtectedRoute = () => {
  const token = useAppSelector((state)=>state.auth.token)
  if (!token) {
    return <Navigate to="/login" />
  }

  return <>{Outlet}</>
}

export default ProtectedRoute
