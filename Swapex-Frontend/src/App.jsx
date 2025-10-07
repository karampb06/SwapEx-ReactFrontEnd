import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/Welcome_page';
import LoginPage from './pages/login_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
