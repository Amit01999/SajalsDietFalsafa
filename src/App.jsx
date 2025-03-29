import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import AppointmentPage from './pages/AppointmentPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import SuccessDetailsPage from './pages/SuccessDetailsPage';
import PortfolioPage from './pages/PortfolioPage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import TeamPage from './pages/TeamPage';
import ContactUsPage from './pages/ContactUsPage';
import ProgramDisplayPage from './pages/ProgramDisplayPage';
import Tips from './pages/Tips';
import programslink from './Data/programslink';
import NotFound from './components/NotFound';
function App() {
  const programTitles = programslink.map(program =>
    program.link.replace('/', '')
  );
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/appointment" element={<NotFound />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailsPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/success-stories/:id" element={<SuccessDetailsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<JobsPage />} />
          <Route path="/career/:id" element={<JobDetailsPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/tips" element={<Tips />} />
          {/* Only apply dynamic route for program titles */}
          {programTitles.map(title => (
            <Route
              key={title}
              path={`/${title}`}
              element={<ProgramDisplayPage />}
            />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
