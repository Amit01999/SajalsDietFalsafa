import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import PortfolioPage from './pages/PortfolioPage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import TeamPage from './pages/TeamPage';
import ContactUsPage from './pages/ContactUsPage';
import ProgramDisplayPage from './pages/ProgramDisplayPage';
import Tips from './pages/Tips';
import programslink from './Data/programslink';
import NotFound from './components/NotFound';

// Lazy-loaded components
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailsPage = lazy(() => import('./pages/BlogDetailsPage'));
const SuccessStoriesPage = lazy(() => import('./pages/SuccessStoriesPage'));
const SuccessDetailsPage = lazy(() => import('./pages/SuccessDetailsPage'));

function App() {
  const programTitles = programslink.map(program =>
    program.link.replace('/', '')
  );

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/appointment" element={<NotFound />} />

        {/* Lazy-loaded Routes */}
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BlogDetailsPage />
            </Suspense>
          }
        />
        <Route
          path="/success-stories"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SuccessStoriesPage />
            </Suspense>
          }
        />
        <Route
          path="/success-stories/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SuccessDetailsPage />
            </Suspense>
          }
        />

        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/career" element={<JobsPage />} />
        <Route path="/career/:id" element={<JobDetailsPage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/tips" element={<Tips />} />

        {/* Dynamic routes for programs */}
        {programTitles.map(title => (
          <Route
            key={title}
            path={`/${title}`}
            element={<ProgramDisplayPage />}
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
