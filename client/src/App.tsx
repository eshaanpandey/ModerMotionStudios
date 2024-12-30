import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import Loader from './components/Loader.tsx';

const LandingPage = React.lazy(() => import('./pages/LandingPage.tsx'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails.tsx'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage.tsx'));
const AboutPage = React.lazy(() => import('./pages/AboutPage.tsx'));
const ContactPage = React.lazy(() => import('./pages/ContactPage.tsx'));


const App: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Suspense fallback={<Loader />}>
                    <Routes>
                      <Route path="/" element={<LandingPage />} key="landing" />
                      <Route path="/project/:id" element={<ProjectDetails />} key="project-details" />
                      <Route path="/category/:category" element={<CategoryPage />} key="category-page" />
                      <Route path="/contact" element={<ContactPage />} key="contact" />
                      <Route path="/about" element={<AboutPage />} key="contact" />
                    </Routes>
                </Suspense>
            </MainLayout>
        </Router>
    );
};

export default App;
