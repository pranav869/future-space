import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import FutureSpaceLayout from './components/FutureSpaceLayout';

// NESTORA Interiors Homepage
import NestoraHome from './pages/NestoraHome';
import Products from './pages/Products';
import Gallery from './pages/Gallery';

// Future Space Architecture & Interior Design Pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Residential from './pages/categories/Residential';
import Commercial from './pages/categories/Commercial';
import Kitchens from './pages/categories/Kitchens';
import Hospitality from './pages/categories/Hospitality';
import Villas from './pages/categories/Villas';
import Interiors from './pages/categories/Interiors';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={<NestoraHome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/home" element={<FutureSpaceLayout><Home /></FutureSpaceLayout>} />

        {/* Dedicated About Us Route */}
        <Route path="/about" element={<FutureSpaceLayout><About /></FutureSpaceLayout>} />

        {/* Portfolio & Architectural Practice Routes */}
        <Route path="/work" element={<FutureSpaceLayout><Work /></FutureSpaceLayout>} />
        <Route path="/services" element={<FutureSpaceLayout><Services /></FutureSpaceLayout>} />
        <Route path="/studio" element={<FutureSpaceLayout><Studio /></FutureSpaceLayout>} />
        <Route path="/contact" element={<FutureSpaceLayout><Contact /></FutureSpaceLayout>} />

        {/* Project Detail Route */}
        <Route path="/work/projects/:slug" element={<FutureSpaceLayout><ProjectDetail /></FutureSpaceLayout>} />

        {/* Category Routes */}
        <Route path="/work/residential" element={<FutureSpaceLayout><Residential /></FutureSpaceLayout>} />
        <Route path="/work/commercial" element={<FutureSpaceLayout><Commercial /></FutureSpaceLayout>} />
        <Route path="/work/kitchens" element={<FutureSpaceLayout><Kitchens /></FutureSpaceLayout>} />
        <Route path="/work/hospitality" element={<FutureSpaceLayout><Hospitality /></FutureSpaceLayout>} />
        <Route path="/work/villas" element={<FutureSpaceLayout><Villas /></FutureSpaceLayout>} />
        <Route path="/work/interiors" element={<FutureSpaceLayout><Interiors /></FutureSpaceLayout>} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
