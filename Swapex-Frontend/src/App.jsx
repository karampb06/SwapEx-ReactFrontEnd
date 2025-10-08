import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {SignupPage} from './pages/signup_page.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App
