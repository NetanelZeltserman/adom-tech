import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/components/home'
import AboutPage from '@/components/about'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
