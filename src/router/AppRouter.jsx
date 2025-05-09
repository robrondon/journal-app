import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { AuthRoutes } from "../auth"
import { JournalRoutes } from "../journal"
import { CheckingAuth } from "../ui"
import { login, logout } from "../store/auth"

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout())
      const { email, uid, displayName, photoURL } = user
      dispatch(login({ email, uid, displayName, photoURL }))
    })
  }, [dispatch]);

  if (status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
