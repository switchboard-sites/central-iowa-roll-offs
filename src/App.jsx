import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ContentProvider } from './context/ContentContext'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'
import Home from './pages/Home'
import ServiceArea from './pages/ServiceArea'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HelmetProvider>
      <ContentProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service-area" element={<ServiceArea />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <MobileCallBar />
        </BrowserRouter>
      </ContentProvider>
    </HelmetProvider>
  )
}
