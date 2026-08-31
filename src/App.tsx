import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import DashboardLayout from "./components/DashboardLayout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardLayout />
    </div>
  )
}

export default App
