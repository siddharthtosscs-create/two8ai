import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Clients from './pages/Clients';
import About from './pages/About';
import Leadership from './pages/Leadership';
import AdvisoryBoard from './pages/AdvisoryBoard';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Enterprise from './pages/Enterprise';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/animations/ScrollProgress';

import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollProgress />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/industries" element={<Industries />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/leadership" element={<Leadership />} />
                  <Route path="/advisory-board" element={<AdvisoryBoard />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/enterprise" element={<Enterprise />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/demo" element={<Navigate to="/contact" replace />} />

                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
