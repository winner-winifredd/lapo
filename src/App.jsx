import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Sidebar from "./components/sidebar"
import Dashboard from "./pages/Dashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light">
        <div className="flex bg-[#F1F7FF]">
          <Sidebar />
          <main className="flex-1 bg-[#F1F7FF]">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
