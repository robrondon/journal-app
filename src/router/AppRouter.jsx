import { useSelector } from "react-redux"
import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth"
import { JournalRoutes } from "../journal"
import { CheckingAuth } from "../ui"

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)

  if (status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}
