import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Consulting from './consulting'
import Finance from './finance'
import Analytics from './analytics'
// import Resources from './resources'
import Projects from './projects'
import Resources from './resources'
import Team from './team'
import Gallery from './gallery'
import Fin from './finance/Fin.jsx'

function Page() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/"    element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fin" element={<Fin />} />
        </Routes>
      </Router>
      </>
  );
};

export default Page
