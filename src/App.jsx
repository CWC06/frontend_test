import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import PostGameDashboard from './pages/PostGameDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/post-game-dashboard" element={<PostGameDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
