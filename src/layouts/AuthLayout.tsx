import Loader from "@/components/loader"
import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"
export default function AuthLayout() {
  const { data, isError, isLoading } = useAuth()
  if (isError) {
    return <Navigate to='/login' />
  }
  if (isLoading) {
    return <Loader/>
  }
  return (
    <>
      {data ? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}
