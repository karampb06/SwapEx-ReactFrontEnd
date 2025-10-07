import './Welcome_Page.css';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <header className="header">
        <img src={logo} alt="SwapEx Logo" className="logo" />
        <h1>Welcome to SwapEx</h1>
      </header>
      <div className="buttons">
        <button className="btn" onClick={() => window.location.href = '/login'}>Login</button>
        <button className="btn">SignUp</button>
      </div>
      <Footer />
    </div>
  );
}

export default WelcomePage;