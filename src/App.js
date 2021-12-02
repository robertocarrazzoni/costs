import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProjects from './components/pages/NewProjects';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Project/:id' element={<Project />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/NewProjects' element={<NewProjects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
