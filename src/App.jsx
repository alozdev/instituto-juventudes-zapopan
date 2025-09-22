import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProgramPage from '@/pages/ProgramPage';
import CallsPage from '@/pages/CallsPage';
import CallDetailPage from '@/pages/CallDetailPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import Principios from '@/pages/Principios';
import RegisterPage from '@/pages/RegisterPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programas/:slug" element={<ProgramPage />} />
        <Route path="/convocatorias" element={<CallsPage />} />
        <Route path="/convocatorias/:slug" element={<CallDetailPage />} />
        <Route path="/aviso-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/principios" element={<Principios />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;