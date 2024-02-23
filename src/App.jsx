import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout'
import { DiscoverPage, PlaylistResultsPage } from './pages'

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/results" element={<PlaylistResultsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;