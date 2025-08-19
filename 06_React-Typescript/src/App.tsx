import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"
import type { Info, AdminInfoList } from "./components/types"

const App = () => {
  const user: Info = {
    id: 1,
    name: "Jane doe",
    email: "jane@gmail.com"
  }
  const admin: AdminInfoList = {
    id: 2,
    name: "Kaif biber",
    email: "kaifbiber@gmail.com",
    role: "Admin",
    lastLogin: new Date()
  }

  return (
    <div>
      <UserInfo user={user}/>
      <AdminInfo admin={admin}/>
    </div>
  )
}

export default App