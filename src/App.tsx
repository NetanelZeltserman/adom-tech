import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import HomePage from '@/components/home'
import AboutPage from '@/components/about'
import ContactPage from '@/components/contact'
import Footer from '@/components/layout/footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
